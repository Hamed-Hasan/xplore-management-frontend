"use client";

import Loader from "@/components/Shared/Loader";
import XTable from "@/components/UI/XTable";
import {
  useDeleteBookingMutation,
  useGetBookingQuery,
} from "@/redux/api/features/booking/bookingApi";
import { Button, Popconfirm, Tag, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const BookingHistory = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);

  query["limit"] = size;
  query["page"] = page;

  const { data, isLoading } = useGetBookingQuery({ ...query });

  const [deleteBooking] = useDeleteBookingMutation();

  if (isLoading) {
    return <Loader />;
  }

  const booking = data?.data;
  const meta = data?.meta;

  const columns = [
    {
      title: "Date From",
      dataIndex: "date_from",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Date To",
      dataIndex: "date_to",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Days",
      dataIndex: "how_day",
    },
    {
      title: "Price",
      dataIndex: "service",
      render: function (data: Record<string, string>) {
        return <>{data?.price}</>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      render: function (data: any) {
        return data === "PENDING" ? (
          <Tag color="processing">{data}</Tag>
        ) : data === "APPROVED" ? (
          <Tag color="success">{data}</Tag>
        ) : (
          <Tag color="error">{data}</Tag>
        );
      },
    },
    {
      title: "People",
      render: function (data: Record<string, string>) {
        return <>{data?.adult + data?.child + data?.infant}</>;
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <div className="flex items-center gap-2">
            <Link href={`/tourist/booking-history`}>
              <Button
                onClick={() => message.info(`Maintenance - ${data}`)}
                type="primary"
                ghost
              >
                <EditOutlined />
              </Button>
            </Link>
            <Popconfirm
              title="Are you sure you want to delete this booking?"
              onConfirm={() => onDelete(data)}
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

  const onDelete = async (id: string) => {
    try {
      const res = await deleteBooking(id).unwrap();
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
      <XTable
        loading={isLoading}
        columns={columns}
        dataSource={booking}
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

export default BookingHistory;
