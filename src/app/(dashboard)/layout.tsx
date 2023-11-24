"use client";

import SideBar from "@/components/UI/SideBar";
import TopBar from "@/components/UI/TopBar";

import { Layout, theme } from "antd";
import { useState } from "react";

const { Content } = Layout;

const layout = ({ children }: { children: React.ReactNode }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <SideBar collapsed={collapsed} />
      <Layout style={{ minHeight: "100vh" }}>
        <TopBar
          colorBgContainer={colorBgContainer}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "100vh",
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default layout;
