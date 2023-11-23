import { useGetProfileQuery } from "@/redux/api/features/user/userApi";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Tooltip, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

type ImageUploadProps = {
  name: string;
};

const UploadImage = ({ name }: ImageUploadProps) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const { setValue } = useFormContext();

  const { data: userInfo, isLoading } = useGetProfileQuery({});

  const userData = userInfo?.data;

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      setValue(name, info.file.originFileObj);
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      <Tooltip title="Click here to upload" color="#87CEEB" open>
        Upload
      </Tooltip>
    </div>
  );

  return (
    <>
      <Upload
        name={name}
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action="/api/file"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  );
};

export default UploadImage;
