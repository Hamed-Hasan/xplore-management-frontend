"use client";

import Loader from "@/components/Shared/Loader";

import { Button, Popconfirm, Table, message } from "antd";
import Link from "next/link";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  useDeleteFAQMutation,
  useGetAllFAQQuery,
} from "@/redux/api/features/faq/faqApi";

const Blogs = () => {
  const { data, isLoading } = useGetAllFAQQuery({});
  const [deleteFaq] = useDeleteFAQMutation();

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
            <Link href={`/admin/content-management/faq/${data}`}>
              <Button type="primary" ghost>
                <EditOutlined />
              </Button>
            </Link>
            <Popconfirm
              title="Are you sure you want to delete this Blog?"
              onConfirm={() => onFAQDelete(data)}
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

  const onFAQDelete = async (id: string) => {
    message.loading("Deleting...");
    try {
      const res = await deleteFaq(id).unwrap();
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
