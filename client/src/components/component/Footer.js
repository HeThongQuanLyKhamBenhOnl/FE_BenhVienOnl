import React from "react";
import { Layout, Row, Col } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  LinkOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ backgroundColor: "#E6F7FF", padding: "50px 0" }}>
      <div className="container mx-auto">
        <Row gutter={[32, 32]}>
          {/* Cột đầu tiên: Thông tin liên hệ */}
          <Col xs={24} md={6}>
            <div
              className="rounded-lg p-6"
              style={{
                background: "linear-gradient(135deg, #5b9bd5, #398fff)",
                color: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 className="text-white font-bold text-lg uppercase mb-4 flex items-center">
                <img
                  src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-hospital-icon-design-illustration-png-image_5345011.jpg"
                  alt="Hospital"
                  className="w-8 h-8 mr-2"
                  style={{ width: "50px", height: "50px" }}
                />
                PHÒNG KHÁM BỆNH VIỆN ONL
              </h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <EnvironmentOutlined className="mr-2 text-lg" /> 20-22 Dương
                  Quang Trung, Phường 12, Quận 10, TP.HCM
                </p>
                <p className="flex items-center">
                  <PhoneOutlined className="mr-2 text-lg" />
                  <span className="text-2xl font-bold">1900 6923</span>
                </p>
                <p className="flex items-center">
                  <MailOutlined className="mr-2 text-lg" />{" "}
                  contact.us@umcclinic.com.vn
                </p>
                <p className="flex items-center">
                  <ClockCircleOutlined className="mr-2 text-lg" /> Lịch làm
                  việc: Từ thứ 2 - thứ 7 (7:30 - 16:30)
                </p>
              </div>
            </div>
          </Col>

          {/* Cột thứ hai: Liên kết nhanh */}
          <Col xs={24} md={6}>
            <h3 className="text-blue-700 font-bold text-lg uppercase">
              Liên kết nhanh
            </h3>
            <ul className="text-gray-700 space-y-3 mt-4">
              <li className="flex items-center">
                <CheckCircleOutlined className="text-blue-500 mr-2" />
                <a href="/">Giới thiệu</a>
              </li>
              <li className="flex items-center">
                <CheckCircleOutlined className="text-blue-500 mr-2" />
                <a href="/">Chuyên khoa</a>
              </li>
              <li className="flex items-center">
                <CheckCircleOutlined className="text-blue-500 mr-2" />
                <a href="/">Đội ngũ bác sĩ</a>
              </li>
              <li className="flex items-center">
                <CheckCircleOutlined className="text-blue-500 mr-2" />
                <a href="/">Tin tức</a>
              </li>
              <li className="flex items-center">
                <CheckCircleOutlined className="text-blue-500 mr-2" />
                <a href="/">Hướng dẫn khách hàng</a>
              </li>
              <li className="flex items-center">
                <CheckCircleOutlined className="text-blue-500 mr-2" />
                <a href="/">Liên hệ</a>
              </li>
            </ul>
          </Col>

          {/* Cột thứ ba: Chính sách */}
          <Col xs={24} md={6}>
            <h3 className="text-blue-700 font-bold text-lg uppercase">
              Chính sách
            </h3>
            <ul className="text-gray-700 space-y-3 mt-4">
              <li className="flex items-center">
                <CheckCircleOutlined className="text-blue-500 mr-2" />
                <a href="/">Đã thông báo Bộ Công Thương</a>
              </li>
              <li className="flex items-center">
                <CheckCircleOutlined className="text-blue-500 mr-2" />
                <a href="/">Chính sách bảo mật</a>
              </li>
              <li className="flex items-center">
                <CheckCircleOutlined className="text-blue-500 mr-2" />
                <a href="/">Chính sách hoàn trả</a>
              </li>
            </ul>
          </Col>

          {/* Cột thứ tư: Liên kết */}
          <Col xs={24} md={6}>
            <h3 className="text-blue-700 font-bold text-lg uppercase">
              Liên kết
            </h3>
            <ul className="text-gray-700 space-y-3 mt-4">
              <li className="flex items-center">
                <LinkOutlined className="text-blue-500 mr-2" />
                <a href="/">Cổng thông tin điện tử Sở Y tế TP.HCM</a>
              </li>
              <li className="flex items-center">
                <LinkOutlined className="text-blue-500 mr-2" />
                <a href="/">Cập nhật thông báo Sở Y tế TP.HCM</a>
              </li>
              <li className="flex items-center">
                <LinkOutlined className="text-blue-500 mr-2" />
                <a href="/">Bệnh viện Đại học Y dược TP.HCM</a>
              </li>
            </ul>
            <div className="mt-4">
              <div
                style={{
                  width: "280px",
                  height: "150px",
                  backgroundColor: "#f0f0f0",
                  textAlign: "center",
                  lineHeight: "150px",
                  fontSize: "16px",
                  color: "#333",
                }}
              >
                {/* Facebook Page Placeholder */}
                <img src="https://umcclinic.com.vn/Data/Sites/1/media/y-hoc-thuong-thuc/t%E1%BA%A7m-quan-tr%E1%BB%8Dng-c%E1%BB%A7a-ki%E1%BB%83m-tra-sk-h%E1%BA%ADu-covid/tam-quan-trong-cua-kiem-tra-suc-khoe-hau-covid-19.jpg" alt="footer-banner"/>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Footer>
  );
};

export default FooterComponent;
