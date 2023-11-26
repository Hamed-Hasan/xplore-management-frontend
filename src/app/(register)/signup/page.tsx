import dynamic from "next/dynamic";

const SignUpPage = dynamic(() => import("@/components/Register/SignUpPage"), {
  ssr: false,
});

const SignUp = () => {
  return (
    <div>
      <SignUpPage />
    </div>
  );
};

export default SignUp;
