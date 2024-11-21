import React, { useState } from "react";
import { Row, Col, Input, Select, DatePicker, Button, Form } from "antd";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";
import "bootstrap/dist/css/bootstrap.css";

const { Option } = Select;
const { TextArea } = Input;

const SignupAppointMent = () => {
  const [form] = Form.useForm();

  const handleFormSubmit = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div>
      <HeaderComponent />

      <Col style={{ margin: "40px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%"}}></Col>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "50px",
        }}
      >
        <h2 className="text-2xl font-bold text-blue-900">
          ĐĂNG KÝ KHÁM
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "0.5rem",
            }}
          >
            <span
              style={{
                width: "50px",
                height: "1px",
                backgroundColor: "#a3d1ef",
                margin: "0 10px",
              }}
            ></span>
            <span style={{ fontSize: "1.5rem", color: "#73c2ec" }}>✦</span>
            <span
              style={{
                width: "50px",
                height: "1px",
                backgroundColor: "#a3d1ef",
                margin: "0 10px",
              }}
            ></span>
          </div>
        </h2>
      </Row>

      <Row justify="center">
        <Col
          xs={24}
          sm={24}
          md={16}
          lg={12}
          style={{
            backgroundColor: "#f0f7ff",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Form form={form} layout="vertical" onFinish={handleFormSubmit}>
            <Form.Item
              label="Họ và tên"
              name="name"
              rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
            >
              <Input placeholder="Họ và tên" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Vui lòng nhập email hợp lệ",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              label="Ngày sinh"
              name="dob"
              rules={[{ required: true, message: "Vui lòng chọn ngày sinh" }]}
            >
              <DatePicker style={{ width: "100%" }} placeholder="Ngày sinh" />
            </Form.Item>

            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[
                { required: true, message: "Vui lòng nhập số điện thoại" },
              ]}
            >
              <Input placeholder="Số điện thoại" />
            </Form.Item>

            <Form.Item
              label="Giới tính"
              name="gender"
              rules={[{ required: true, message: "Vui lòng chọn giới tính" }]}
            >
              <Select placeholder="Giới tính">
                <Option value="male">Nam</Option>
                <Option value="female">Nữ</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Địa chỉ"
              name="address"
              rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
            >
              <Input placeholder="Địa chỉ" />
            </Form.Item>

            <Form.Item
              label="Chuyên khoa"
              name="specialty"
              rules={[{ required: true, message: "Vui lòng chọn chuyên khoa" }]}
            >
              <Select placeholder="Chuyên khoa">
                <Option value="testing">Xét Nghiệm</Option>
                <Option value="pediatrics">Nhi khoa</Option>
                <Option value="obstetricsAndGynecology">Sản Phụ khoa</Option>
                <Option value="musculoskeletal">Cơ - xương - khớp</Option>
                <Option value="departmentOfSurgery">Khoa Ngoại</Option>
                <Option value="earNoseThroat">Tai - Mũi - Họng</Option>
                <Option value="cardiovascular">Tim mạch</Option>
                <Option value="liverAndGallbladder">Tiêu Hoa Gan Mật</Option>
                <Option value="general">Nội tổng quát</Option>
                <Option value="eyes">Mắt</Option>
                <Option value="teethJawFace">Răng - Hàm - Mặt</Option>
                <Option value="neurology">Nội Thần Kinh</Option>
                <Option value="mindBody">Tâm Thể</Option>
                <Option value="endocrine">Nội Tiết</Option>
                <Option value="immunoallergy">Dị ứng miễn dịch</Option>
                <Option value="breathing">Hô Hấp</Option>
                <Option value="sleepConsultation">Tư vấn giấc ngủ</Option>
                <Option value="generalHealthCheck">Khám sức khỏe tổng quát</Option>
                <Option value="postCovid19HealthCheckup">Khám sức khỏe hậu Covid-19</Option>
                <Option value="dermatology">Da Liễu</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Ngày khám"
              name="appointmentDate"
              rules={[{ required: true, message: "Vui lòng chọn ngày khám" }]}
            >
              <DatePicker style={{ width: "100%" }} placeholder="Ngày khám" />
            </Form.Item>

            <Form.Item
              label="Buổi khám"
              name="appointmentSession"
              rules={[{ required: true, message: "Vui lòng chọn buổi khám" }]}
            >
              <Select placeholder="Buổi khám">
                <Option value="morning">Sáng</Option>
                <Option value="afternoon">Chiều</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Triệu chứng" name="symptoms">
              <TextArea rows={4} placeholder="Triệu chứng" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Gửi
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <FooterComponent />
    </div>
  );
};

export default SignupAppointMent;
