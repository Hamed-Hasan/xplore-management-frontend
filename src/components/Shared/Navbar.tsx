"use client";

import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Avatar, Button, Drawer, Dropdown, Menu } from "antd";
import { CSSTransition } from "react-transition-group";
import logo from "../../assets/brand.png";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCartOutlined } from "@ant-design/icons";
import CartDrawer from "../UI/CartDrawer";

import { useSession, signOut } from "next-auth/react";

import { useGetProfileQuery } from "@/redux/api/features/user/userApi";

const Navbar = () => {
  const { data: session } = useSession();

  const { data } = useGetProfileQuery({});
  const profile = data?.data;

  const [menuVisible, setMenuVisible] = useState(false);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  const routes = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about-us" },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <nav
      className={`bg-primary p-4 sticky top-0 z-50 backdrop-blur-xl backdrop:bg-primary bg-white/30 `}
    >
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image src={logo} width={100} height={30} alt="" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="text-secondary hover:text-accent font-bold transition duration-500"
            >
              {route.name}
            </Link>
          ))}
          {session?.user && session?.user ? (
            <Dropdown
              overlay={
                <Menu className="w-56">
                  <Menu.Item key="1">
                    <Link href={profile?.role || ""}>Dashboard</Link>
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
          ) : (
            <Link href={"/login"}>
              <Button type="primary">Login</Button>
            </Link>
          )}
          <ShoppingCartOutlined className="text-lg" onClick={showDrawer} />
        </div>
        <div className="md:hidden">
          <MenuOutlined
            className="text-nature text-3xl cursor-pointer"
            onClick={handleMenuToggle}
          />
        </div>
      </div>
      <CSSTransition
        in={menuVisible}
        timeout={500}
        classNames="mobile-menu"
        unmountOnExit
      >
        <div className="md:hidden mt-5 ">
          <Menu mode="vertical" >
            {routes.map((route) => (
              <Menu.Item key={route.path} >
                <Link
                  href={route.path}
                  className="text-secondary hover:text-accent font-bold transition duration-500"
                >
                  {route.name}
                </Link>
              </Menu.Item>
            ))}
            {session?.user && session?.user ? (
              <Dropdown
                overlay={
                  <Menu className="w-56">
                    <Menu.Item key="1">
                      <Link href={profile?.role || ""}>Dashboard</Link>
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
            ) : (
              <Link href={"/login"} className="p-4">
                <Button type="primary">Login</Button>
              </Link>
            )}
          </Menu>
        </div>
      </CSSTransition>
      <CartDrawer open={open} onClose={onClose} />
    </nav>
  );
};

export default Navbar;
