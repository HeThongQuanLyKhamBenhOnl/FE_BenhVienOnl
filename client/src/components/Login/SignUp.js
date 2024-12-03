import React, { useState } from "react";
import { Input, Button, Form, notification, DatePicker, Select } from "antd";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/User/userSlice";

const { Option } = Select;

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Xử lý khi form được submit
  const onFinish = async (values) => {
    const formattedValues = {
      ...values,
      dateOfBirth: values.dateOfBirth.format("YYYY-MM-DD"),
    };

    const resultAction = await dispatch(registerUser(formattedValues));

    if (registerUser.fulfilled.match(resultAction)) {
      notification.success({
        message: "Đăng ký thành công",
        description: "Tài khoản của bạn đã được tạo thành công!",
      });
    } else {
      const errorMessage =
        resultAction.payload?.message || "Có lỗi xảy ra khi đăng ký.";
      notification.error({
        message: "Đăng ký thất bại",
        description: errorMessage,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-green-400">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Đăng Ký</h2>
        <Form name="signup" onFinish={onFinish} layout="vertical">
          {/* Tên người dùng */}
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[
              { required: true, message: "Vui lòng nhập tên người dùng!" },
            ]}
          >
            <Input placeholder="Nhập tên người dùng" />
          </Form.Item>

          {/* Họ và tên */}
          <Form.Item
            label="Họ và tên"
            name="fullName"
            rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
          >
            <Input placeholder="Nhập họ và tên" />
          </Form.Item>

          {/* Email */}
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

          {/* Mật khẩu */}
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password
              placeholder="Nhập mật khẩu"
              type={showPassword ? "text" : "password"}
              onClick={togglePasswordVisibility}
            />
          </Form.Item>

          {/* Số điện thoại */}
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>

          {/* Giới tính */}
          <Form.Item
            label="Giới tính"
            name="gender"
            rules={[{ required: true, message: "Vui lòng chọn giới tính!" }]}
          >
            <Select placeholder="Chọn giới tính">
              <Option value="Male">Nam</Option>
              <Option value="Female">Nữ</Option>
              <Option value="Other">Khác</Option>
            </Select>
          </Form.Item>

          {/* Ngày sinh */}
          <Form.Item
            label="Ngày sinh"
            name="dateOfBirth"
            rules={[{ required: true, message: "Vui lòng chọn ngày sinh!" }]}
          >
            <DatePicker
              style={{ width: "100%" }}
              placeholder="Chọn ngày sinh"
            />
          </Form.Item>

          {/* Địa chỉ */}
          <Form.Item
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
          >
            <Input placeholder="Nhập địa chỉ" />
          </Form.Item>

          {/* Nút đăng ký */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12 text-lg bg-teal-500 hover:bg-teal-600 text-white"
            >
              Đăng ký
            </Button>
          </Form.Item>
        </Form>

        {/* Link tới trang đăng nhập */}
        <div className="text-center mt-4">
          <span className="text-sm">Đã có tài khoản? </span>
          <a href="/login" className="text-sm text-teal-600 hover:underline">
            Đăng nhập
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
