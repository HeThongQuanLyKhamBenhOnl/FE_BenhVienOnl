import React from "react";
import { Input, Button, Form, notification } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Redux/User/userSlice";

const OtpVerification = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tempUser } = location.state || {};

  if (!tempUser) {
    notification.error({
      message: "Không tìm thấy thông tin người dùng",
      description: "Vui lòng đăng ký lại.",
    });
    navigate("/signup");
  }

  const onFinish = async (values) => {
    try {
      const payload = {
        otp: values.otp,
        tempUser,
      };

      const resultAction = await dispatch(registerUser(payload));

      if (registerUser.fulfilled.match(resultAction)) {
        notification.success({
          message: "Đăng ký thành công",
          description: "Tài khoản của bạn đã được tạo thành công!",
        });

        navigate("/login");
      } else {
        throw new Error(resultAction.payload.message);
      }
    } catch (err) {
      notification.error({
        message: "Xác nhận OTP thất bại",
        description: err.message || "Có lỗi xảy ra khi xác nhận OTP.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-400">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Xác nhận OTP
        </h2>
        <Form name="otpVerification" onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Mã OTP"
            name="otp"
            rules={[{ required: true, message: "Vui lòng nhập mã OTP!" }]}
          >
            <Input placeholder="Nhập mã OTP" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-12 text-lg"
            >
              Xác nhận
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default OtpVerification;
