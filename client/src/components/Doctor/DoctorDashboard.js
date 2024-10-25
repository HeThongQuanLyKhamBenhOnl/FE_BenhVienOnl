import React from "react";
import { Link, Outlet } from "react-router-dom"; // Sử dụng Outlet để render nội dung từ các route con

const DoctorDashboard = () => {
  const menuItems = [
    { name: "Thông tin bác sĩ", path: "/doctor/infoDoctor" },
    { name: "Quản lý bệnh nhân", path: "/doctor/manage-patients" },
    { name: "Hồ sơ bệnh nhân", path: "/doctor/patient-records" },
  ];

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Bảng Điều Khiển Bác Sĩ</h2>
        <ul style={styles.sidebarList}>
          {menuItems.map((item, index) => (
            <li key={index} style={styles.sidebarItem}>
              <Link to={item.path} style={styles.sidebarLink}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div style={styles.content}>
        {/* Render nội dung từ các route con */}
        <Outlet />
      </div>
    </div>
  );
};

// Style CSS-in-JS
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#007bff",
    padding: "20px",
    color: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  sidebarTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#fff",
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
    display: "block",
    padding: "10px",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    transition: "background-color 0.3s ease",
  },
  sidebarLinkHover: {
    backgroundColor: "#0056b3",
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
