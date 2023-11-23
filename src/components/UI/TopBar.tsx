"use client";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import logo from "../../assets/brand.png";
import type { MenuProps } from "antd";
import Link from "next/link";

import { Layout, Button, Avatar, Select, Dropdown, Menu } from "antd";
import Image from "next/image";
import { useGetProfileQuery } from "@/redux/api/features/user/userApi";
import { signOut } from "next-auth/react";
import { useGetAllBookingQuery } from "@/redux/api/features/booking/bookingApi";

const { Header } = Layout;

const TopBar = ({ colorBgContainer, collapsed, setCollapsed }: any) => {
  const { data } = useGetProfileQuery({});
  const profile = data?.data;

  const { data: bookingData } = useGetAllBookingQuery({});

  const bookingLength = bookingData?.data;

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const notificationItems = bookingLength?.map((book: any) => ({
    value: book?.id,
    disabled: true,
    label: (
      <div className="">
        <div className="mb-2">
          <p className="text-sm">{book?.service?.title}</p>
          <p className="text-gray-600 text-xs">{book?.createdAt}</p>
        </div>
        <p className="text-gray-800">Booking Places</p>
      </div>
    ),
  }));

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <div className="flex justify-between items-center px-8">
        <div className="flex justify-between items-center">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Image src={logo} alt="brand" height={40} width={100} />
        </div>
        <div className="flex justify-between items-center gap-6">
          <Select
            defaultValue="Notification"
            style={{ width: 220 }}
            onChange={handleChange}
            autoClearSearchValue={true}
            options={notificationItems}
            suffixIcon={<NotificationOutlined />}
          />
          <Dropdown
            overlay={
              <Menu className="w-56">
                <Menu.Item key="1">
                  <Link href={"/"}>Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link href={`/${profile?.role}/profile`}>Profile</Link>
                </Menu.Item>
                <Menu.Item onClick={() => signOut()} key="3">
                  Log Out
                </Menu.Item>
              </Menu>
            }
            trigger={["click"]}
          >
            <a
              className="ant-dropdown-link cursor-pointer"
              onClick={(e) => e.preventDefault()}
            >
              <Avatar size={48} src={profile?.image} />
            </a>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default TopBar;
