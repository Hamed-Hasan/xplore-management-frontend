"use client";

import { Button, Card, Col, Row, message } from "antd";
import {
  SettingFilled,
  NotificationFilled,
  SecurityScanFilled,
  DatabaseFilled,
} from "@ant-design/icons";
import Form from "@/components/Froms/Form";
import FormInput from "@/components/Froms/FormInput";
import {
  useGetProfileQuery,
  useUpdateUserMutation,
} from "@/redux/api/features/user/userApi";
import Loader from "@/components/Shared/Loader";
import UploadImage from "@/components/UI/UploadImage";
import handleCloudinaryImageUpload from "@/components/Home/CloudinaryImageUploader";
import pollForImageAvailability from "@/hooks/pollForImageAvailability";

const AdminProfile = () => {
  const { data: userInfo, isLoading } = useGetProfileQuery({});

  const [updateUser] = useUpdateUserMutation();

  if (isLoading) {
    return <Loader />;
  }

  const userData = userInfo?.data;

  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    const formData = {
      name: data?.name || userData.name,
      phone: data?.phone || userData.phone,
      address: data?.address || userData.address,
    };

    try {
      const res = await updateUser(formData).unwrap();
      if (res?.success) {
        message.success(res.message);
        window.location.reload();
      }
    } catch (error: any) {
      message.error(error.data.message);
    }
  };

  const handleImageUpload = async (data: any) => {
    message.loading("Updating...");

    try {
      const images = await handleCloudinaryImageUpload(data?.file);
      await pollForImageAvailability(images);
      const res = await updateUser({ image: images }).unwrap();
      if (res.success) {
        message.success(res.message);
      }
      console.log(res);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div>
      <Row gutter={50}>
        <Col span={8}>
          <Card className="flex flex-col  items-center w-full h-screen relative">
            <div className="flex justify-center">
              <Form submitHandler={handleImageUpload}>
                <UploadImage name="file" />
                <br />
                <Button htmlType="submit" className="w-full mt-4">
                  Upload
                </Button>
              </Form>
            </div>
            <div className="mt-10 text-base space-y-3">
              <p className="items-center gap-6 text-nature hover:bg-elegant px-4 py-2 duration-500 rounded-md cursor-pointer">
                <SettingFilled /> Account
              </p>
              <p className="items-center gap-6 text-nature hover:bg-elegant px-4 py-2 duration-500 rounded-md cursor-pointer">
                <NotificationFilled /> Notification
              </p>
              <p className="items-center gap-6 text-nature hover:bg-elegant px-4 py-2 duration-500 rounded-md cursor-pointer">
                <SecurityScanFilled /> Security
              </p>
              <p className="items-center gap-6 text-nature hover:bg-elegant px-4 py-2 duration-500 rounded-md cursor-pointer">
                <DatabaseFilled /> Privacy and Data
              </p>
            </div>
            <div className="absolute bottom-7">
              <p className="text-passion font-bold cursor-pointer">
                Delete Account
              </p>
            </div>
          </Card>
        </Col>
        <Col span={16}>
          <Form submitHandler={onSubmit}>
            <Row gutter={20}>
              <Col span={12} className="mt-5">
                <FormInput
                  name="name"
                  label="Name"
                  placeholder="Enter Your Name"
                  Dvalue={userData?.name}
                />
              </Col>
              <Col span={12} className="mt-5">
                <FormInput
                  name="email"
                  label="Email"
                  value={userData?.email}
                  disabled={true}
                />
              </Col>
              <Col span={12} className="mt-5">
                <FormInput
                  name="password"
                  label="Password"
                  value={"*******"}
                  disabled={true}
                />
              </Col>
              <Col span={12} className="mt-5">
                <FormInput
                  name="phone"
                  label="Phone"
                  placeholder="Enter Your Phone"
                  Dvalue={userData?.phone}
                />
              </Col>
              <Col span={12} className="mt-5">
                <FormInput
                  name="address"
                  label="Address"
                  placeholder="Address"
                  Dvalue={userData?.address}
                />
              </Col>
            </Row>
            <div className="mt-10 flex justify-end">
              <Button type="primary" htmlType="submit">
                Update Profile
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default AdminProfile;
