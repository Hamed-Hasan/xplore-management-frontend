"use client";

import React, { useState } from "react";
import Lottie from "lottie-react";
import animate from "../../assets/animate/travel.json";
import logo from "../../assets/brand.png";
import Image from "next/image";
import Form from "@/components/Froms/Form";
import FormInput from "@/components/Froms/FormInput";
import { Button, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { signInYupValidate } from "@/schema/userSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginPage = () => {
  const router = useRouter();

  const [error, setError] = useState("");

  const onSubmit = async (data: any) => {
    try {
      const result = await signIn("Xplore", {
        email: data.email,
        password: data.password,
        redirect: false,
        // callbackUrl: "/",
      });
      if (result?.ok) {
        message.success("Login Successful");
        router.refresh();
        setError("");
      } else {
        setError("Account Not Found");
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
        <div className="relative z-10 h-full flex flex-col justify-center items-center">
          <h2 className="text-xl text mb-8 text-primary">
            Sign In Your Account
          </h2>
          <Form
            submitHandler={onSubmit}
            resolver={yupResolver(signInYupValidate)}
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
            <small className="text-passion">
              {error}
              <br />
            </small>
            <div className="mt-5 ">
              <Button type="primary" className="w-full" htmlType="submit">
                Sign In
              </Button>
            </div>
          </Form>
          <span className="mt-6 text-xs text-neutral">
            Don&lsquo;t have and account?{" "}
            <Link className="text-sunset" href="/signup">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
