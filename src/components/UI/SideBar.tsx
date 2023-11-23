import { useGetProfileQuery } from "@/redux/api/features/user/userApi";
import sideBarItems from "@/utils/sideBarItems";
import { Layout, Menu } from "antd";

const { Sider } = Layout;

const SideBar = ({ collapsed }: { collapsed: boolean }) => {
  const { data } = useGetProfileQuery({});
  const  role  = data?.data?.role;

  const items = sideBarItems(role);

  return (
    <Sider width={250} trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
        className="p-2"
      />
    </Sider>
  );
};

export default SideBar;
