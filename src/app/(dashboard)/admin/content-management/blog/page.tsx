"use client";

import Loader from "@/components/Shared/Loader";
import {
  useDeleteBlogMutation,
  useGetAllBlogQuery,
} from "@/redux/api/features/blog/blogApi";
import { Button, Popconfirm, Table, message } from "antd";
import Link from "next/link";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const Blogs = () => {
  const { data, isLoading } = useGetAllBlogQuery({});
  const [deleteBlog] = useDeleteBlogMutation();

  if (isLoading) {
    return <Loader />;
  }

  const blogData = data?.data;

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <div className="flex items-center gap-2">
            <Link href={`/admin/content-management/blog/${data}`}>
              <Button type="primary" ghost>
                <EditOutlined />
              </Button>
            </Link>
            <Popconfirm
              title="Are you sure you want to delete this Blog?"
              onConfirm={() => onBlogDelete(data)}
              okText="Yes"
              cancelText="No"
              overlayStyle={{ width: "200px" }}
            >
              <Button type="primary" danger>
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const onBlogDelete = async (id: string) => {
    message.loading("Deleting...");
    try {
      const res = await deleteBlog(id).unwrap();
      if (res?.success) {
        message.success(res.message);
      }
    } catch (error: any) {
      message.error(error.data.message);
    }
  };

  return <Table columns={columns} dataSource={blogData} loading={isLoading} />;
};

export default Blogs;
