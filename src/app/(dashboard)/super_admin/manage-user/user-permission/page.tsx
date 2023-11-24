"use client";

import Loader from "@/components/Shared/Loader";
import XTable from "@/components/UI/XTable";
import {
  useGetAllUserQuery,
  useUpdateUserRoleMutation,
} from "@/redux/api/features/user/userApi";
import { Button, Input, Popconfirm, Tag, message } from "antd";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useDebounced } from "@/redux/hooks/useDebounced";

const UserPermission = () => {
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
  const [updateRole] = useUpdateUserRoleMutation();

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
      title: "Action",
      dataIndex: "id",
      render: function (data: any, i: any) {
        return (
          <div className="flex justify-around items-center gap-2">
            {i.role === "admin" ? (
              <>
                <Popconfirm
                  title="Are you sure you want to power this user?"
                  onConfirm={() => onChangeRole("super_admin", data)}
                  okText="Yes"
                  cancelText="No"
                  overlayStyle={{ width: "200px" }}
                >
                  <Button type="primary">Make Super Admin</Button>
                </Popconfirm>
                <Popconfirm
                  title="Are you sure you want to power this user?"
                  onConfirm={() => onChangeRole("tourist", data)}
                  okText="Yes"
                  cancelText="No"
                  overlayStyle={{ width: "200px" }}
                >
                  <Button type="primary" ghost>
                    Make Tourist
                  </Button>
                </Popconfirm>
              </>
            ) : i.role === "super_admin" ? (
              <>
                <Popconfirm
                  title="Are you sure you want to power this user?"
                  onConfirm={() => onChangeRole("admin", data)}
                  okText="Yes"
                  cancelText="No"
                  overlayStyle={{ width: "200px" }}
                >
                  <Button type="primary" danger>
                    Make Admin
                  </Button>
                </Popconfirm>
                <Popconfirm
                  title="Are you sure you want to power this user?"
                  onConfirm={() => onChangeRole("tourist", data)}
                  okText="Yes"
                  cancelText="No"
                  overlayStyle={{ width: "200px" }}
                >
                  <Button type="primary" ghost>
                    Make Tourist
                  </Button>
                </Popconfirm>
              </>
            ) : (
              <>
                <Popconfirm
                  title="Are you sure you want to power this user?"
                  onConfirm={() => onChangeRole("super_admin", data)}
                  okText="Yes"
                  cancelText="No"
                  overlayStyle={{ width: "200px" }}
                >
                  <Button type="primary">Make Super Admin</Button>
                </Popconfirm>
                <Popconfirm
                  title="Are you sure you want to power this user?"
                  onConfirm={() => onChangeRole("admin", data)}
                  okText="Yes"
                  cancelText="No"
                  overlayStyle={{ width: "200px" }}
                >
                  <Button type="primary" danger>
                    Make Admin
                  </Button>
                </Popconfirm>
              </>
            )}
          </div>
        );
      },
    },
  ];

  const onChangeRole = async (role: string, id: string) => {
    message.loading("Updating");
    try {
      const res = await updateRole({ role, id }).unwrap();
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

export default UserPermission;
