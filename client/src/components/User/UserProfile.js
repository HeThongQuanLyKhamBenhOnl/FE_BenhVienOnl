import React from "react";
import { Link, Outlet } from "react-router-dom";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";
import {
  FaUser,
  FaCalendarAlt,
  FaFileMedical,
  FaComments,
  FaCreditCard,
  FaSignOutAlt,
  FaPrescriptionBottleAlt,
  FaFileInvoice,
} from "react-icons/fa";
//abc
const UserProfile = () => {
  // Lấy vai trò của người dùng (giả sử vai trò được lưu trong localStorage)
  const role = localStorage.getItem("role"); // Hoặc lấy từ Redux Store nếu bạn sử dụng Redux

  const menuItems = [
    { name: "Thông tin cá nhân", path: "/user/profile", icon: <FaUser /> },
    {
      name: "Lịch khám của tôi",
      path: "/user/appointments",
      icon: <FaCalendarAlt />,
      allowedRoles: ["user"], // Chỉ hiển thị với người dùng thường
    },
    {
      name: "Hồ sơ bệnh án",
      path: "/user/medical-record",
      icon: <FaFileMedical />,
      allowedRoles: ["user"], // Chỉ hiển thị với người dùng thường
    },
    {
      name: "Toa Thuốc Của tôi",
      path: "/user/medicine",
      icon: <FaPrescriptionBottleAlt />,
      allowedRoles: ["user"], // Chỉ hiển thị với người dùng thường
    },
    {
      name: "Hóa Đơn Toa Thuốc",
      path: "/user/invoice",
      icon: <FaFileInvoice />,
      allowedRoles: ["user"], // Chỉ hiển thị với người dùng thường
    },
    {
      name: "Quản lý thẻ",
      path: "/profile/manage-card",
      icon: <FaCreditCard />,
      allowedRoles: ["user"], // Chỉ hiển thị với người dùng thường
    },
    { name: "Đăng xuất", path: "/logout", icon: <FaSignOutAlt /> },
  ];

  // Lọc các mục menu dựa trên vai trò người dùng
  const filteredMenuItems = menuItems.filter(
    (item) => !item.allowedRoles || item.allowedRoles.includes(role)
  );

  return (
    <div>
      <HeaderComponent />
      <div style={styles.container}>
        <div style={styles.sidebar}>
          <h3 style={styles.sidebarTitle}>Thông tin tài khoản</h3>
          <ul style={styles.sidebarList}>
            {filteredMenuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path} style={styles.sidebarLink}>
                  {item.icon} <span style={styles.linkText}>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div style={styles.content}>
          <Outlet />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

// Style CSS
const styles = {
  container: {
    marginTop: "20px",
    display: "flex",
    alignItems: "flex-start",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    marginTop: "70px",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#fff",
    padding: "20px",
    color: "#000",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  sidebarTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#000",
  },
  sidebarList: {
    listStyle: "none",
    padding: 0,
  },
  sidebarLink: {
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
    color: "#000",
    textDecoration: "none",
    fontSize: "16px",
    transition: "color 0.3s",
  },
  linkText: {
    marginLeft: "10px",
  },
  content: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    marginLeft: "20px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  },
};

export default UserProfile;
