"use client";

import Loader from "@/components/Shared/Loader";
import XTable from "@/components/UI/XTable";
import { Button, Input, Popconfirm, Select, Tag, Tooltip, message } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useDebounced } from "@/redux/hooks/useDebounced";
import {
  useDeleteBookingMutation,
  useGetAllBookingQuery,
  useUpdateBookingByStatusMutation,
  useUpdateBookingScheduleMutation,
} from "@/redux/api/features/booking/bookingApi";
import { bookingStatusTypes } from "@/constants/services";
import XCalender from "@/components/UI/XCalender";
import CalenderModal from "@/components/UI/CalenderModal";

const Bookings = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [calenderData, setCalenderData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scheduleId, setScheduleId] = useState("");

  query["limit"] = size;
  query["page"] = page;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }

  const { data, isLoading } = useGetAllBookingQuery(query);
  const [deleteBooking] = useDeleteBookingMutation();
  const [updateStatus] = useUpdateBookingByStatusMutation();
  const [updateSchedule] = useUpdateBookingScheduleMutation();

  if (isLoading) {
    return <Loader />;
  }

  const userData = data?.data;
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
            <Select
              defaultValue="Change Status"
              style={{ width: 200 }}
              onChange={(value) => handleSuccess(value, data)}
              options={bookingStatusTypes}
            />
            <Button
              type="dashed"
              onClick={() => {
                showModal();
                setScheduleId(data);
              }}
            >
              Adjust Schedule
            </Button>

            <Popconfirm
              title="Are you sure you want to delete this booking?"
              onConfirm={() => onBookingDelete(data)}
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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleChangeSchedule = async () => {
    const formData = {
      // @ts-ignore
      date_from: calenderData?.startDate,
      // @ts-ignore
      date_to: calenderData?.endDate,
    };

    try {
      const res = await updateStatus({
        id: scheduleId,
        data: formData,
      }).unwrap();
      if (res.success) {
        message.success(res.message);
        setIsModalOpen(false);
      }
    } catch (error) {
      message.error("Not able to update");
    }
  };

  const handleSuccess = async (payload: string, id: string) => {
    try {
      const res = await updateStatus({
        id,
        data: { status: payload },
      }).unwrap();
      if (res.success) {
        message.success(res.message);
      }
    } catch (error) {
      message.error("Not able to update");
    }
  };

  const onBookingDelete = async (id: string) => {
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
      {/* <Input
        size="large"
        placeholder="Find your destination"
        className="my-5"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setPage(1);
        }}
        suffix={<SearchOutlined />}
      /> */}
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
      <CalenderModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen}>
        <XCalender setCalenderData={setCalenderData} />
        {/*  @ts-ignore */}
        {calenderData?.startDate && calenderData?.endDate && (
          <div className="flex justify-center my-8">
            <Button type="primary" onClick={handleChangeSchedule}>
              Change Schedule
            </Button>
          </div>
        )}
      </CalenderModal>
    </div>
  );
};

export default Bookings;
