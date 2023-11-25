"use client";

import Loader from "@/components/Shared/Loader";
import Title from "@/components/UI/Title";
import { useGetAllBlogQuery } from "@/redux/api/features/blog/blogApi";
import { Card } from "antd";

const Blog = () => {
  const { data, isLoading } = useGetAllBlogQuery({});

  if (isLoading) {
    return <Loader />;
  }

  const blogData = data?.data;

  return (
    <div className="container mx-auto">
      <Title title="Blog and News" top="Read Now" />
      <div className="space-y-4">
        {blogData.length > 0 &&
          blogData.map((data: any) => (
            <Card title={data?.title} key={data?.id} bordered={true}>
              <p className="text-neutral">{data?.description}</p>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Blog;
