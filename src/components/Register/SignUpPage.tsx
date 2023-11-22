"use client";

import React, { useState } from "react";
import Lottie from "lottie-react";
import animate from "../../assets/animate/travel2.json";
import logo from "../../assets/brand.png";
import Image from "next/image";
import Form from "@/components/Froms/Form";
import FormInput from "@/components/Froms/FormInput";
import { Button, message } from "antd";
import Link from "next/link";
import { useCreateUserMutation } from "@/redux/api/features/user/userApi";
import ApiError from "@/components/Errors/ApiError";
import { useRouter } from "next/navigation";
import { createUserYupValidate } from "@/schema/userSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUpPage = () => {
  const [createUser] = useCreateUserMutation();
  const [error, setError] = useState<any>({});

  const router = useRouter();

  const onSubmit = async (data: any) => {
    data["role"] = "tourist";
    data["image"] =
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80";
    try {
      const res = await createUser(data).unwrap();
      if (res.success) {
        message.success(res.message);
        setError({});
        router.push("/login");
      }
    } catch (error: any) {
      message.error(error.data.message);
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8 h-screen">
      <div className="col-span-1 lg:grid place-items-center hidden">
        <div className="">
          <Link href={"/"}>
            <Image src={logo} alt="brand" height={70} width={200} />
          </Link>
          <p className="text-center text-neutral">More Explore</p>
        </div>
        <Lottie animationData={animate} loop={true} />
      </div>
      <div className="relative w-full bg-elegant col-span-2 custom-clip-path">
        <div className="relative z-10 h-full  flex flex-col justify-center items-center">
          <h2 className="text-xl text mb-8 text-primary">
            Register Your Account
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
            <div className="mt-5 ">
              <Button type="primary" className="w-full" htmlType="submit">
                Sign Up
              </Button>
            </div>
          </Form>
          <span className="mt-6 text-xs text-neutral">
            Don&lsquo;t have and account?{" "}
            <Link className="text-sunset" href="/login">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
