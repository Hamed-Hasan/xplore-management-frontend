import dynamic from "next/dynamic";

const LoginPage = dynamic(() => import("@/components/Register/LoginPage"), {
  ssr: false,
});

const Login = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default Login;
