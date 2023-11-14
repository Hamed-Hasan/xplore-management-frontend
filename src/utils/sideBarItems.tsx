import {
  UserOutlined,
  HistoryOutlined,
  ContainerOutlined,
  RadiusSettingOutlined,
  MonitorOutlined,
  ControlOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const sideBarItems = (role: string) => {
  const commonItems = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: <Link href={`/${role}/profile`}>Profile</Link>,
    },
  ];

  const adminItems = [
    ...commonItems,
    {
      key: "manage-user",
      icon: <ContainerOutlined />,
      label: "Manage User",
      children: [
        {
          label: (
            <Link href={`/admin/manage-user/create-user`}>Create User</Link>
          ),
          icon: <ContainerOutlined />,
        },
        {
          label: <Link href={`/admin/manage-user/users`}>All User</Link>,
          icon: <ContainerOutlined />,
        },
      ],
    },
    {
      key: "manage-services",
      icon: <RadiusSettingOutlined />,
      label: "Manage Services",
      children: [
        {
          label: (
            <Link href={`/admin/manage-services/create-services`}>
              Create Services
            </Link>
          ),
          icon: <RadiusSettingOutlined />,
        },
        {
          label: (
            <Link href={`/admin/manage-services/services`}>All Services</Link>
          ),
          icon: <RadiusSettingOutlined />,
        },
      ],
    },
    {
      key: "booking-services",
      icon: <MonitorOutlined />,
      label: "Booking Services",
      children: [
        {
          label: (
            <Link href={`/admin/booking-services/bookings`}>All Bookings</Link>
          ),
          icon: <MonitorOutlined />,
        },
      ],
    },
    {
      key: "content-management",
      icon: <ControlOutlined />,
      label: "Content Management",
      children: [
        {
          label: "Blog",
          icon: <ControlOutlined />,
          children: [
            {
              label: (
                <Link href={`/admin/content-management/blog`}>All Blog</Link>
              ),
              icon: <ControlOutlined />,
            },
            {
              label: (
                <Link href={`/admin/content-management/blog/create-blog`}>
                  Create Blog
                </Link>
              ),
              icon: <ControlOutlined />,
            },
          ],
        },
        {
          label: "FAQ",
          icon: <ControlOutlined />,
          children: [
            {
              label: (
                <Link href={`/admin/content-management/faq`}>All FAQ</Link>
              ),
              icon: <ControlOutlined />,
            },
            {
              label: (
                <Link href={`/admin/content-management/faq/create-faq`}>
                  Create FAQ
                </Link>
              ),
              icon: <ControlOutlined />,
            },
          ],
        },
      ],
    },
  ];

  const superAdminItems = [
    ...commonItems,
    {
      key: "manage-user",
      icon: <ContainerOutlined />,
      label: "Manage User",
      children: [
        {
          label: (
            <Link href={`/super_admin/manage-user/create-user`}>
              Create User
            </Link>
          ),
          icon: <ContainerOutlined />,
        },
        {
          label: <Link href={`/super_admin/manage-user/users`}>All User</Link>,
          icon: <ContainerOutlined />,
        },
        {
          label: (
            <Link href={`/super_admin/manage-user/user-permission`}>
              Permissions
            </Link>
          ),
          icon: <ContainerOutlined />,
        },
      ],
    },
    {
      key: "feedback",
      icon: <HistoryOutlined />,
      label: <Link href={`/super_admin/feedback`}>Feedback</Link>,
    },
  ];

  const touristItems = [
    ...commonItems,
    {
      key: "booking-history",
      icon: <HistoryOutlined />,
      label: <Link href={`/tourist/booking-history`}>Booking History</Link>,
    },
  ];

  if (role === "admin") {
    return adminItems;
  }
  if (role === "super_admin") return superAdminItems;
  if (role === "tourist") return touristItems;
};

export default sideBarItems;
