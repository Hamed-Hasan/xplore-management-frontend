import { Spin } from "antd";

const Loader = () => {
  return (
    <div className="h-screen grid place-items-center">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
