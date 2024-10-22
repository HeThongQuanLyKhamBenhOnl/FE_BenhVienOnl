import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  IdcardOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";
import logo from "../../img/logo.jfif";
import UserMenu from "../Header/UserMenu";

const { Sider, Content, Header } = Layout;

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false); // Quản lý trạng thái mở/đóng của Sider

  // Cấu hình các items cho Menu theo format mới của Ant Design
  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: <Link to="/adminDashboard/control">Bảng Điều Khiển</Link>,
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: <Link to="/adminDashboard/user">Quản Lý Người Dùng</Link>,
    },
    {
      key: "3",
      icon: <IdcardOutlined />,
      label: <Link to="/adminDashboard/doctor">Quản Lý Bác Sĩ</Link>,
    },
    {
      key: "4",
      icon: <ProfileOutlined />,
      label: "Quản Lý Ca Khám Bệnh",
    },
    {
      key: "5",
      icon: <UploadOutlined />,
      label: <Link to="/adminDashboard/department">Quản Lý Chuyên Khoa</Link>,
    },
  ];

  return (
    <Layout className="min-h-screen">
      {/* Sidebar */}
      <Sider
        trigger={null} // Tắt trigger mặc định của Ant Design
        collapsible
        collapsed={collapsed} // Điều khiển trạng thái thu gọn/mở rộng
        width={250}
        style={{ backgroundColor: "#808080" }}
      >
        <div className="logo p-4 text-center">
          <a href="/">
            {" "}
            <img src={logo} alt="logo" className="h-12 mx-auto" />
          </a>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems}
          style={{ backgroundColor: "#808080" }}
        />
      </Sider>

      {/* Main content */}
      <Layout className="site-layout">
        <Header
          style={{ backgroundColor: "#808080" }}
          className="p-4 flex justify-between items-center"
        >
          {collapsed ? (
            <MenuUnfoldOutlined
              className="trigger"
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
            />
          ) : (
            <MenuFoldOutlined
              className="trigger"
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
            />
          )}

          <div className="ml-auto">
            <UserMenu /> {/* Đưa UserMenu sang phải */}
          </div>
        </Header>
        <Content className="p-8 bg-gray-100">
          {/* Phần nội dung sẽ thay đổi tại đây dựa vào các Route con */}
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
