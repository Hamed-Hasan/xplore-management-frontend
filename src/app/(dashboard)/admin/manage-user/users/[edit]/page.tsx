"use client";

import ApiError from "@/components/Errors/ApiError";
import Form from "@/components/Froms/Form";
import FormInput from "@/components/Froms/FormInput";
import Loader from "@/components/Shared/Loader";
import {
  useGetSingleUserQuery,
  useUpdateSingleUserMutation,
} from "@/redux/api/features/user/userApi";
import { Button, message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditUserByAdmin = ({ params }: any) => {
  const { edit } = params;

  const [error, setError] = useState<any>({});

  const { data, isLoading } = useGetSingleUserQuery(edit);
  const [updateSingleUser] = useUpdateSingleUserMutation();

  const router = useRouter();

  if (isLoading) {
    return <Loader />;
  }

  const onSubmit = async (data: any) => {
    message.loading("Updating...");
    const formData = {
      name: data?.name || userData.name,
      phone: data?.phone || userData.phone,
      email: data?.email || userData.email,
    };

    try {
      const res = await updateSingleUser({
        id: edit,
        userUpdatedInfo: formData,
      }).unwrap();

      if (res.success) {
        message.success(res.message);
        setError("");
        router.push("/admin/manage-user/users");
      }
    } catch (error: any) {
      setError(error);
    }
  };

  const userData = data?.data;

  return (
    <div className="w-6/12 mx-auto">
      <h2 className="text-xl text mb-8 text-primary text-center">
        Update User Info
      </h2>
      <Form submitHandler={onSubmit}>
        <div className="space-y-3">
          <FormInput
            name="name"
            label="Name"
            placeholder="Enter Your Name"
            Dvalue={userData?.name}
          />
          <FormInput name="email" label="Email" Dvalue={userData?.email} />
          <FormInput
            name="phone"
            label="Phone"
            placeholder="Enter Your Phone"
            Dvalue={userData?.phone}
          />
        </div>
        <ApiError error={error} />
        <div className="mt-5 flex justify-end">
          <Button type="primary" className="" htmlType="submit">
            Update User Info
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditUserByAdmin;
