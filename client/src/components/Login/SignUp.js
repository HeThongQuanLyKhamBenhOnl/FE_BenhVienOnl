import React from "react";
import {
  Input,
  Button,
  Form,
  notification,
  DatePicker,
  Select,
  Row,
  Col,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendOtpWithDetails } from "../../Redux/User/userSlice";

const { Option } = Select;

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, successMessage } = useSelector((state) => state.user);

  const onFinish = async (values) => {
    try {
      const formattedValues = {
        ...values,
        dateOfBirth: values.dateOfBirth.format("YYYY-MM-DD"),
      };

      const resultAction = await dispatch(sendOtpWithDetails(formattedValues));

      if (sendOtpWithDetails.fulfilled.match(resultAction)) {
        notification.success({
          message: "OTP đã được gửi",
          description: resultAction.payload.message,
        });

        navigate("/otp-verification", {
          state: { tempUser: resultAction.payload.tempUser },
        });
      } else {
        throw new Error(resultAction.payload.message);
      }
    } catch (err) {
      notification.error({
        message: "Đăng ký thất bại",
        description: err.message || "Có lỗi xảy ra khi gửi OTP.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-green-400">
      <div
        className="bg-white p-6 md:p-8 rounded-lg shadow-lg"
        style={{ maxWidth: "800px", width: "100%" }}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Đăng Ký</h2>
        <Form name="signup" onFinish={onFinish} layout="vertical">
          {/* First row */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Tên đăng nhập"
                name="username"
                rules={[
                  { required: true, message: "Vui lòng nhập tên người dùng!" },
                  {
                    pattern: /^[a-zA-Z][a-zA-Z0-9]{3,}$/,
                    message:
                      "Tên đăng nhập phải lớn hơn 4 ký tự, bắt đầu bằng chữ, và không chứa ký tự đặc biệt.",
                  },
                ]}
              >
                <Input placeholder="Nhập tên người dùng" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Họ và tên"
                name="fullName"
                rules={[
                  { required: true, message: "Vui lòng nhập họ và tên!" },
                  {
                    pattern: /^[\p{L}\s]{5,}$/u,
                    message:
                      "Họ và tên phải lớn hơn 5 ký tự, không chứa ký tự số hoặc ký tự đặc biệt.",
                  },
                ]}
              >
                <Input placeholder="Nhập họ và tên" />
              </Form.Item>
            </Col>
          </Row>

          {/* Second row */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Địa chỉ Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Vui lòng nhập email hợp lệ!",
                  },
                ]}
              >
                <Input placeholder="Nhập email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[
                  { required: true, message: "Vui lòng nhập mật khẩu!" },
                  {
                    min: 6,
                    message: "Mật khẩu phải lớn hơn 6 ký tự.",
                  },
                ]}
              >
                <Input.Password placeholder="Nhập mật khẩu" />
              </Form.Item>
            </Col>
          </Row>

          {/* Third row */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Số điện thoại"
                name="phone"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại!" },
                  {
                    pattern: /^\+?[0-9]{10,}$/,
                    message:
                      "Số điện thoại phải lớn hơn 10 ký tự và có thể bắt đầu bằng dấu '+' hoặc chỉ chứa số.",
                  },
                ]}
              >
                <Input placeholder="Nhập số điện thoại (+84...)" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Giới tính"
                name="gender"
                rules={[
                  { required: true, message: "Vui lòng chọn giới tính!" },
                ]}
              >
                <Select placeholder="Chọn giới tính">
                  <Option value="Male">Nam</Option>
                  <Option value="Female">Nữ</Option>
                  <Option value="Other">Khác</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          {/* Fourth row */}
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Ngày sinh"
                name="dateOfBirth"
                rules={[
                  { required: true, message: "Vui lòng chọn ngày sinh!" },
                ]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder="Chọn ngày sinh"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Địa chỉ"
                name="address"
                rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
              >
                <Input placeholder="Nhập địa chỉ" />
              </Form.Item>
            </Col>
          </Row>

          {/* Submit button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12 text-lg"
              loading={loading}
            >
              Đăng ký
            </Button>
          </Form.Item>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
