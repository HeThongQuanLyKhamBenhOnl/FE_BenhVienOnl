import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const Navigation = () => {
  // Lấy thông tin userInfo từ Redux store
  const { userInfo } = useSelector((state) => state.user);

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      className="navigation-menu"
    >
      {/* Trang Chủ */}
      <Menu.Item key="1" icon={<AppstoreOutlined />}>
        <a href="/">Trang Chủ</a>
      </Menu.Item>

      <SubMenu key="gioi-thieu" icon={<SettingOutlined />} title="Giới Thiệu">
        <Menu.Item key="2-1">
          <a href="/gioi-thieu">Giới Thiệu</a>
        </Menu.Item>
        <Menu.Item key="2-2">
          <a href="/tai-sao-chon-chung-toi">Tại sao chọn chúng tôi</a>
        </Menu.Item>
        <Menu.Item key="2-3">
          <a href="/co-so-vat-chat">Cơ sở vật chất</a>
        </Menu.Item>
      </SubMenu>

      <SubMenu key="dich-vu" icon={<SnippetsOutlined />} title="Dịch Vụ">
        <Menu.Item key="3-1">
          <a href="/kham-suc-khoe-tong-quat-ca-nhan">
            Khám sức khỏe tổng quát cá nhân
          </a>
        </Menu.Item>
        <Menu.Item key="3-2">
          <a href="/kham-suc-khoe-tong-quat-doanh-nghiep">
            Khám sức khỏe tổng quát doanh nghiệp
          </a>
        </Menu.Item>
        <Menu.Item key="3-3">
          <a href="/tam-soat-chuc-nang-ho-hap">Tầm soát chức năng hô hấp</a>
        </Menu.Item>
        <Menu.Item key="3-4">
          <a href="/tam-soat-tieu-hoa-gan-mat">Tầm soát tiêu hóa gan mật</a>
        </Menu.Item>
        <Menu.Item key="3-5">
          <a href="/tam-soat-tim-mach">Tầm soát Tim mạch</a>
        </Menu.Item>
        <Menu.Item key="3-6">
          <a href="/tam-soat-ung-thu">Tầm soát Ung thư</a>
        </Menu.Item>
        <Menu.Item key="3-7">
          <a href="/dich-vu-bao-hiem">Dịch vụ Bảo hiểm</a>
        </Menu.Item>
        <Menu.Item key="3-8">
          <a href="/cac-goi-dich-vu-khac">Các gói dịch vụ khác</a>
        </Menu.Item>
        <Menu.Item key="3-9">
          <a href="/ho-tro">Hỗ Trợ</a>
        </Menu.Item>
        <Menu.Item key="3-10">
          <a href="/dao-tao">Đào Tạo</a>
        </Menu.Item>
        <Menu.Item key="3-11">
          <a href="/tu-van">Tư Vấn</a>
        </Menu.Item>
      </SubMenu>

      {/* Sản Phẩm */}
      <SubMenu key="san-pham" icon={<AppstoreOutlined />} title="Sản Phẩm">
        <Menu.Item key="4-1">
          <a href="/phan-mem">Phần Mềm</a>
        </Menu.Item>
        <Menu.Item key="4-2">
          <a href="/phan-cung">Phần Cứng</a>
        </Menu.Item>
        <Menu.Item key="4-3">
          <a href="/phu-kien">Phụ Kiện</a>
        </Menu.Item>
      </SubMenu>

      {/* Tin tức */}
      <SubMenu key="tin-tuc" icon={<AppstoreOutlined />} title="Tin Tức">
        <Menu.Item key="5-1">
          <a href="/y-hoc-thuong-thuc">Y học thường thức</a>
        </Menu.Item>
        <Menu.Item key="5-2">
          <a href="/tin-tuc-su-kien">Tin tức sự kiện</a>
        </Menu.Item>
        <Menu.Item key="5-3">
          <a href="/hoi-dap-y-khoa">Hỏi đáp y khoa</a>
        </Menu.Item>
      </SubMenu>

      {/* Hướng dẫn khách hàng */}
      <SubMenu
        key="huong-dan-khach-hang"
        icon={<AppstoreOutlined />}
        title="Hướng dẫn khách hàng"
      >
        <Menu.Item key="6-1">
          <a href="/thong-tin-tham-khao">Thông tin tham khảo</a>
        </Menu.Item>
        <Menu.Item key="6-2">
          <a href="/huong-dan-tru-cap-he-thong-luu-tru-va-quan-ly-hinh-anh">
            Hướng dẫn truy cập hệ thống lưu trữ và quản lý hình ảnh (pacs)
          </a>
        </Menu.Item>
      </SubMenu>

      {/* Liên Hệ */}
      <Menu.Item key="7" icon={<MailOutlined />}>
        <a href="/contact">Liên Hệ</a>
      </Menu.Item>

      {/* Menu cho Admin */}
      {userInfo && userInfo.role === "admin" && (
        <Menu.Item key="8" icon={<UserOutlined />}>
          <a href="/adminDashboard">Quản lý Hệ thống</a>
        </Menu.Item>
      )}

      {userInfo && userInfo.role === "doctor" && (
        <Menu.Item key="8" icon={<UserOutlined />}>
          <a href="/doctor/infoDoctor">Dành Cho Bác Sĩ</a>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Navigation;
