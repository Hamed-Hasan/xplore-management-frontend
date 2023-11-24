"use client";

import Loader from "@/components/Shared/Loader";
import XTable from "@/components/UI/XTable";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "@/redux/api/features/user/userApi";
import { Button, Input, Popconfirm, Tag, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import Image from "next/image";
import { useDebounced } from "@/redux/hooks/useDebounced";

const User = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  const { data, isLoading } = useGetAllUserQuery(query);
  const [deleteUser] = useDeleteUserMutation();

  if (isLoading) {
    return <Loader />;
  }

  const userData = data?.data;
  const meta = data?.meta;

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      render: function (data: any) {
        if (data) {
          return (
            <>
              <Image
                src={data}
                alt=""
                height={50}
                width={50}
                className="rounded-xl object-cover"
              />
            </>
          );
        } else {
          return null;
        }
      },
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      render: function (data: any, i: any) {
        return i.role === "admin" ? (
          <Tag color="error">{data}</Tag>
        ) : i.role === "super_admin" ? (
          <Tag color="success">{data}</Tag>
        ) : (
          <Tag color="processing">{data}</Tag>
        );
      },
    },
    {
      title: "Created Time",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <div className="flex items-center gap-2">
            <Link href={`/super_admin/manage-user/users/${data}`}>
              <Button type="primary" ghost>
                <EditOutlined />
              </Button>
            </Link>
            <Popconfirm
              title="Are you sure you want to delete this user?"
              onConfirm={() => onUserDelete(data)}
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

  const onUserDelete = async (id: string) => {
    try {
      const res = await deleteUser(id).unwrap();
      if (res.success) {
        message.success(res.message);
      }
    } catch (error: any) {
      message.error(error.data.message);
    }
  };

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
  };

  return (
    <div>
      <Input
        size="large"
        placeholder="Find your destination"
        className="my-5"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setPage(1);
        }}
        suffix={<SearchOutlined />}
      />
      <XTable
        loading={isLoading}
        columns={columns}
        dataSource={userData}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default User;
