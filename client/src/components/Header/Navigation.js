import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Menu } from "antd";
import {
  FaHome,
  FaInfoCircle,
  FaStethoscope,
  FaNewspaper,
  FaUserShield,
  FaEnvelope,
} from "react-icons/fa";

import './CSS/Navigation.css';

const { SubMenu } = Menu;

const iconStyle = { fontSize: "2rem", paddingLeft: "10px", };
const flexCenter = { display: "flex", alignItems: "center", };

const Navigation = () => {
  const location = useLocation();
  const { userInfo } = useSelector((state) => state.user);
  const doctorPaths = [
    "/doctor",
    "/doctor/infoDoctor",
    "/doctor/manage-schedule",
    "/doctor/manage-patients",
    "/doctor/patient-records",
    "/doctor/doctor-medicines",
    "/doctor/invoice-Patient",
  ];

  // Get the current path
  const currentPath = window.location.pathname;

  // Check if the current path belongs to the doctor routes
  const isDoctorPath = doctorPaths.some(path => currentPath.startsWith(path));

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[location.pathname]}
      className="navigation-menu"
    >
      <Menu.Item className="padR10" style={{ ...flexCenter }} key="/" icon={<FaHome style={iconStyle} />}>
        <a href="/">Trang Chủ</a>
      </Menu.Item>

      <SubMenu
        key="gioi-thieu"
        icon={<FaInfoCircle style={iconStyle} />}
        title={
          <span style={{ paddingRight: "10px" }}>
            Giới Thiệu
          </span>
        }
        className="ant-menu-submenu-title padR10"
      >
        <Menu.Item key="/gioi-thieu">
          <a href="/gioi-thieu">Giới Thiệu</a>
        </Menu.Item>
        <Menu.Item key="/tai-sao-chon-chung-toi">
          <a href="/tai-sao-chon-chung-toi">Tại sao chọn chúng tôi</a>
        </Menu.Item>
        <Menu.Item key="/co-so-vat-chat">
          <a href="/co-so-vat-chat">Cơ sở vật chất</a>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key="dich-vu"
        icon={<FaStethoscope style={iconStyle} />}
        title={
          <span style={{ paddingRight: "10px" }}>
            Dịch Vụ
          </span>
        }
        className="ant-menu-submenu-title padR10"
      >
        <Menu.Item key="/kham-suc-khoe-tong-quat-ca-nhan">
          <a href="/kham-suc-khoe-tong-quat-ca-nhan">
            Khám sức khỏe tổng quát cá nhân
          </a>
        </Menu.Item>
        <Menu.Item key="/kham-suc-khoe-tong-quat-doanh-nghiep">
          <a href="/kham-suc-khoe-tong-quat-doanh-nghiep">
            Khám sức khỏe tổng quát doanh nghiệp
          </a>
        </Menu.Item>
        <Menu.Item key="/tam-soat-chuc-nang-ho-hap">
          <a href="/tam-soat-chuc-nang-ho-hap">Tầm soát chức năng hô hấp</a>
        </Menu.Item>
        <Menu.Item key="/tam-soat-tieu-hoa-gan-mat">
          <a href="/tam-soat-tieu-hoa-gan-mat">Tầm soát tiêu hóa gan mật</a>
        </Menu.Item>
        <Menu.Item key="/tam-soat-tim-mach">
          <a href="/tam-soat-tim-mach">Tầm soát Tim mạch</a>
        </Menu.Item>
        <Menu.Item key="/tam-soat-ung-thu">
          <a href="/tam-soat-ung-thu">Tầm soát Ung thư</a>
        </Menu.Item>
        <Menu.Item key="/dich-vu-bao-hiem">
          <a href="/dich-vu-bao-hiem">Dịch vụ Bảo hiểm</a>
        </Menu.Item>
        <Menu.Item key="/cac-goi-dich-vu-khac">
          <a href="/cac-goi-dich-vu-khac">Các gói dịch vụ khác</a>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key="tin-tuc"
        icon={<FaNewspaper style={iconStyle} />}
        title={
          <span style={{ paddingRight: "10px" }}>
            Tin Tức
          </span>
        }
        className="ant-menu-submenu-title padR10"
      >
        <Menu.Item key="/y-hoc-thuong-thuc">
          <a href="/y-hoc-thuong-thuc">Y học thường thức</a>
        </Menu.Item>
        <Menu.Item key="/tin-tuc-su-kien">
          <a href="/tin-tuc-su-kien">Tin tức sự kiện</a>
        </Menu.Item>
        <Menu.Item key="/hoi-dap-y-khoa">
          <a href="/hoi-dap-y-khoa">Hỏi đáp y khoa</a>
        </Menu.Item>
      </SubMenu>

      <SubMenu
        key="huong-dan-khach-hang"
        icon={<FaInfoCircle style={iconStyle} />}
        title={
          <span style={{ paddingRight: "10px" }}>
            Hướng Dẫn Khách Hàng
          </span>
        }
        className="ant-menu-submenu-title padR10"
      >
        <Menu.Item key="/thong-tin-tham-khao">
          <a href="/thong-tin-tham-khao">Thông tin tham khảo</a>
        </Menu.Item>
        <Menu.Item key="/huong-dan-tru-cap-he-thong-luu-tru-va-quan-ly-hinh-anh">
          <a href="/huong-dan-tru-cap-he-thong-luu-tru-va-quan-ly-hinh-anh">
            Hướng dẫn truy cập hệ thống lưu trữ và quản lý hình ảnh (pacs)
          </a>
        </Menu.Item>
      </SubMenu>

      <Menu.Item className="padR10" style={{ ...flexCenter }} key="/lien-he" icon={<FaEnvelope style={iconStyle} />}>
        <a href="/lien-he">Liên Hệ</a>
      </Menu.Item>

      {userInfo && userInfo.role === "admin" && (
        <Menu.Item className="padR10" style={{ ...flexCenter }} key="/adminDashboard" icon={<FaUserShield style={iconStyle} />}>
          <a href="/adminDashboard">Quản lý Hệ thống</a>
        </Menu.Item>
      )}

      {userInfo && userInfo.role === "doctor" && (
        <SubMenu
          key="danh-cho-bac-si"
          icon={<FaUserShield style={iconStyle} />}
          title={<span style={{ paddingRight: "10px" }}>Dành Cho Bác Sĩ</span>}
          className="ant-menu-submenu-title padR10"
        >
          <Menu.Item style={{display: "none"}} key="/doctor/infoDoctor">
            <a href="/doctor/infoDoctor">Thông Tin Bác Sĩ</a>
          </Menu.Item>
          <Menu.Item style={{display: "none"}} key="/doctor/manage-schedule">
            <a href="/doctor/manage-schedule">Quản Lý Lịch</a>
          </Menu.Item>
          <Menu.Item style={{display: "none"}} key="/doctor/manage-patients">
            <a href="/doctor/manage-patients">Quản Lý Bệnh Nhân</a>
          </Menu.Item>
          <Menu.Item style={{display: "none"}} key="/doctor/patient-records">
            <a href="/doctor/patient-records">Hồ Sơ Bệnh Nhân</a>
          </Menu.Item>
          <Menu.Item style={{display: "none"}} key="/doctor/doctor-medicines">
            <a href="/doctor/doctor-medicines">Thuốc Của Bác Sĩ</a>
          </Menu.Item>
          <Menu.Item style={{display: "none"}} key="/doctor/invoice-Patient">
            <a href="/doctor/invoice-Patient">Hóa Đơn Bệnh Nhân</a>
          </Menu.Item>
        </SubMenu>
      )}
    </Menu>
  );
};

export default Navigation;