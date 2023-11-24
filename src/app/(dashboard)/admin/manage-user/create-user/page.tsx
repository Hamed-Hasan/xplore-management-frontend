"use client";

import ApiError from "@/components/Errors/ApiError";
import Form from "@/components/Froms/Form";
import FormInput from "@/components/Froms/FormInput";
import { useCreateUserMutation } from "@/redux/api/features/user/userApi";
import { Button, Select, message } from "antd";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserYupValidate } from "@/schema/userSchema";

const CreateUser = () => {
  const [createUser] = useCreateUserMutation();
  const [error, setError] = useState<any>({});

  const onSubmit = async (data: any) => {
    data["role"] = "tourist";
    try {
      const res = await createUser(data).unwrap();
      if (res.success) {
        message.success(res.message);
        setError({});
      }
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <div className="w-6/12 mx-auto">
      <h2 className="text-xl text mb-8 text-primary text-center">
        Create User
      </h2>
      <Form
        submitHandler={onSubmit}
        resolver={yupResolver(createUserYupValidate)}
      >
        <div className="space-y-3">
          <FormInput
            name="email"
            type="email"
            label="Email"
            placeholder="example@email.com"
          />
          <FormInput
            name="password"
            label="Password"
            placeholder="******"
            type="password"
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
