import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  FaUser,
  FaChartBar,
  FaUserMd,
  FaWarehouse,
  FaBookMedical,
  FaFileAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import logo from "../../img/logo.jfif";
import UserMenu from "../Header/UserMenu";

const { Sider, Content, Header } = Layout;

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  // Cấu hình các items cho Menu
  const menuItems = [
    {
      key: "1",
      icon: <FaChartBar />,
      label: <Link to="/adminDashboard/control">Bảng Điều Khiển</Link>,
    },
    {
      key: "2",
      icon: <FaUser />,
      label: <Link to="/adminDashboard/user">Quản Lý Người Dùng</Link>,
    },
    {
      key: "3",
      icon: <FaUserMd />,
      label: <Link to="/adminDashboard/doctor">Quản Lý Bác Sĩ</Link>,
    },
    {
      key: "4",
      icon: <FaWarehouse />,
      label: <Link to="/adminDashboard/medicine">Quản Lý Kho Thuốc</Link>,
    },
    {
      key: "5",
      icon: <FaBookMedical />,
      label: <Link to="/adminDashboard/department">Quản Lý Chuyên Khoa</Link>,
    },
    {
      key: "6",
      icon: <FaFileAlt />,
      label: <Link to="/adminDashboard/allRecord">Quản Lý Hồ Sơ Bệnh Án</Link>,
    },
  ];

  return (
    <Layout className="min-h-screen">
      {/* Sidebar */}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={250}
        style={{ backgroundColor: "#808080" }}
      >
        <div className="logo p-4 text-center">
          <a href="/">
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
            <FaBars
              className="trigger"
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
            />
          ) : (
            <FaTimes
              className="trigger"
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
            />
          )}

          <div className="ml-auto">
            <UserMenu />
          </div>
        </Header>
        <Content className="p-8 bg-gray-100">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
