import React from "react";
import { Link, Outlet } from "react-router-dom";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";
// Import icon từ react-icons
import {
  FaUserMd,
  FaCalendarAlt,
  FaFileMedical,
  FaClock,
  FaPrescriptionBottleAlt,
} from "react-icons/fa";

const DoctorDashboard = () => {
  const menuItems = [
    {
      name: "Thông tin bác sĩ",
      path: "/doctor/infoDoctor",
      icon: <FaUserMd />,
    },
    {
      name: "Quản lý lịch làm việc",
      path: "/doctor/manage-schedule",
      icon: <FaClock />,
    },
    {
      name: "Quản lý lịch hẹn",
      path: "/doctor/manage-patients",
      icon: <FaCalendarAlt />,
    },
    {
      name: "Hồ sơ bệnh nhân",
      path: "/doctor/patient-records",
      icon: <FaFileMedical />,
    },
    {
      name: "Kê Toa Thuốc Onl",
      path: "/doctor/doctor-medicines",
      icon: <FaPrescriptionBottleAlt />,
    },
    {
      name: "Hóa Đơn Của Bệnh Nhân",
      path: "/doctor/invoice-Patient",
      icon: <FaPrescriptionBottleAlt />,
    },
  ];

  return (
    <div>
      <HeaderComponent />
      <div style={styles.container}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h2 style={styles.sidebarTitle}>Bảng Điều Khiển Bác Sĩ</h2>
          <ul style={styles.sidebarList}>
            {menuItems.map((item, index) => (
              <li key={index} style={styles.sidebarItem}>
                <Link to={item.path} style={styles.sidebarLink}>
                  <span style={styles.icon}>{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div style={styles.content}>
          <Outlet />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

// Style CSS-in-JS
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    margin: "65px 0px",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#fff", // Đổi nền sidebar thành trắng
    padding: "20px",
    color: "#333", // Chữ sidebar đổi thành màu đen
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  sidebarTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333", // Tiêu đề sidebar đổi thành màu đen
    textAlign: "center",
  },
  sidebarList: {
    listStyle: "none",
    padding: 0,
  },
  sidebarItem: {
    marginBottom: "15px",
  },
  sidebarLink: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    color: "#333", // Đổi màu chữ thành đen
    textDecoration: "none",
    borderRadius: "8px",
    backgroundColor: "#fff", // Nền trắng cho link
    transition: "background-color 0.3s ease",
  },
  sidebarLinkHover: {
    backgroundColor: "#f0f0f0", // Đổi nền khi hover thành màu xám nhạt
  },
  icon: {
    marginRight: "10px", // Khoảng cách giữa icon và text
    fontSize: "18px",
  },
  content: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#fff",
    margin: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default DoctorDashboard;
