"use client";

import { Result, Button } from "antd";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <div>
            <p className="text-lg mb-4">
              It seems like the page you are looking for might have been removed
              or never existed.
            </p>
            <p className="text-lg mb-4">
              You can try going back to the home page or using the search
              feature to find what you are looking for.
            </p>
            <Button type="primary" onClick={() => router.push("/")}>
              Go Back to Home
            </Button>
          </div>
        }
      />
    </div>
  );
};

export default NotFound;
