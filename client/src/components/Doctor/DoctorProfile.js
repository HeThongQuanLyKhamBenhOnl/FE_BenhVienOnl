import React, { useState, useEffect } from "react";
import {
  useGetDoctorProfileQuery,
  useUpdateDoctorProfileMutation,
} from "../../Redux/Doctor/api";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  message,
  Row,
  Col,
} from "antd";

import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  updateProfile,
  clearError,
} from "../../Redux/User/userSlice";
import moment from "moment";

const DoctorProfile = () => {
  const dispatch = useDispatch();

  // Lấy thông tin từ store
  const {
    userInfo,
    loading: profileLoading,
    error: profileError,
  } = useSelector((state) => state.user);

  // Lấy thông tin chuyên môn từ API của bác sĩ
  const {
    data: profile,
    error: profileErrorApi,
    isLoading,
  } = useGetDoctorProfileQuery();
  const [updateDoctorProfile] = useUpdateDoctorProfileMutation();

  // Tạo state cho thông tin chuyên môn và cá nhân
  const [formData, setFormData] = useState({
    specialty: "",
    experience: "",
    qualifications: [],
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [updateError, setUpdateError] = useState(null);

  useEffect(() => {
    dispatch(getProfile()); // Lấy thông tin cá nhân từ API
  }, [dispatch]);

  // Cập nhật state với thông tin cá nhân từ store
  useEffect(() => {
    if (userInfo) {
      setName(userInfo.fullName || "");
      setEmail(userInfo.email || "");
      setPhone(userInfo.phone || "");
      setGender(userInfo.gender || "");
      setDateOfBirth(userInfo.dateOfBirth || "");
      setAddress(userInfo.address || "");
    }
  }, [userInfo]);

  // Cập nhật state với thông tin chuyên môn từ API
  useEffect(() => {
    if (profile && profile.data) {
      setFormData({
        specialty: profile.data.specialty || "",
        experience: profile.data.experience || "",
        qualifications: profile.data.qualifications || [],
      });
    }
  }, [profile]);

  // Xử lý cập nhật thông tin chuyên môn
  const handleSpecialtySubmit = async () => {
    try {
      await updateDoctorProfile(formData).unwrap();
      message.success("Thông tin chuyên môn đã được cập nhật thành công!");
    } catch (error) {
      message.error("Cập nhật thông tin chuyên môn thất bại.");
    }
  };

  // Xử lý cập nhật thông tin cá nhân
  const handleProfileSubmit = async (values) => {
    setUpdateError(null);

    const updatedData = {
      fullName: name,
      email,
      phone,
      gender,
      dateOfBirth,
      address,
    };

    try {
      const response = await dispatch(updateProfile(updatedData));

      if (response.meta.requestStatus === "fulfilled") {
        message.success("Thông tin cá nhân đã được cập nhật thành công!");
      } else {
        setUpdateError(
          "Cập nhật thông tin cá nhân thất bại. Vui lòng thử lại."
        );
      }
    } catch (error) {
      setUpdateError("Cập nhật thông tin thất bại. Vui lòng thử lại.");
    }
  };

  // Xử lý lỗi từ API
  useEffect(() => {
    if (profileError || profileErrorApi) {
      message.error(profileError || profileErrorApi);
      dispatch(clearError());
    }
  }, [profileError, profileErrorApi, dispatch]);

  // Xử lý khi đang tải
  if (isLoading || profileLoading) {
    return <div>Đang tải...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <Row gutter={24}>
        {/* Form thông tin cá nhân */}
        <Col xs={24} md={12}>
          <h2 className="text-2xl font-semibold mb-6">Thông tin cá nhân</h2>
          <Form layout="vertical" onFinish={handleProfileSubmit}>
            <Form.Item label="Họ và Tên">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Họ và Tên"
              />
            </Form.Item>

            <Form.Item label="Số điện thoại">
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Số điện thoại"
              />
            </Form.Item>

            <Form.Item label="Email">
              <Input value={email} disabled placeholder="Email" />
            </Form.Item>

            <Form.Item label="Giới tính">
              <Select
                value={gender}
                onChange={(value) => setGender(value)}
                placeholder="Chọn giới tính"
              >
                <Select.Option value="Male">Nam</Select.Option>
                <Select.Option value="Female">Nữ</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Ngày sinh">
              <DatePicker
                value={moment(dateOfBirth)}
                onChange={(date) => setDateOfBirth(date.toISOString())}
                format="YYYY-MM-DD"
                placeholder="Chọn ngày sinh"
              />
            </Form.Item>

            <Form.Item label="Địa chỉ">
              <Input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Địa chỉ"
              />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Cập nhật thông tin cá nhân
            </Button>
          </Form>
        </Col>

        {/* Form thông tin chuyên môn */}
        <Col xs={24} md={12}>
          <h2 className="text-2xl font-semibold mb-6">Thông tin chuyên môn</h2>
          <Form layout="vertical" onFinish={handleSpecialtySubmit}>
            <Form.Item label="Chuyên môn">
              <Input
                value={formData.specialty}
                onChange={(e) =>
                  setFormData({ ...formData, specialty: e.target.value })
                }
                placeholder="Chuyên môn"
              />
            </Form.Item>

            <Form.Item label="Kinh nghiệm (năm)">
              <Input
                type="number"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                placeholder="Số năm kinh nghiệm"
              />
            </Form.Item>

            <Form.Item label="Trình độ chuyên môn">
              <Input
                value={formData.qualifications.join(", ")}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    qualifications: e.target.value.split(","),
                  })
                }
                placeholder="Trình độ chuyên môn (cách nhau bằng dấu phẩy)"
              />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Cập nhật thông tin chuyên môn
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default DoctorProfile;
