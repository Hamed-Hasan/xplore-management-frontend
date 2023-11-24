"use client";

import ApiError from "@/components/Errors/ApiError";
import Form from "@/components/Froms/Form";
import FormInput from "@/components/Froms/FormInput";
import { useCreateUserMutation } from "@/redux/api/features/user/userApi";
import { Button, Select, message } from "antd";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserByAdminYupValidate } from "@/schema/userSchema";
import FormSelect from "@/components/Froms/FormSelect";

const CreateUser = () => {
  const [createUser] = useCreateUserMutation();
  const [error, setError] = useState<any>({});

  const onSubmit = async (data: any) => {
    try {
      const res = await createUser(data).unwrap();
      if (res.success) {
        message.success(res.message);
        setError({});
      }
    } catch (error: any) {
      message.error(error.data.message);
    }
  };

  return (
    <div className="w-6/12 mx-auto">
      <h2 className="text-xl text mb-8 text-primary text-center">
        Create User
      </h2>
      <Form
        submitHandler={onSubmit}
        resolver={yupResolver(createUserByAdminYupValidate)}
      >
        <div className="">
          <FormInput
            name="email"
            type="email"
            label="Email"
            placeholder="example@email.com"
          />
          <br />
          <FormInput
            name="password"
            label="Password"
            placeholder="******"
            type="password"
          />
          <br />
          <FormSelect
            name="role"
            options={[
              { value: "super_admin", label: "Super Admin" },
              { value: "admin", label: "Admin" },
              { value: "tourist", label: "Tourist" },
            ]}
            label="Select Category"
          />
        </div>
        <ApiError error={error} />
        <div className="mt-5 flex justify-end">
          <Button type="primary" className="" htmlType="submit">
            Create Now
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateUser;
