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
  Tabs,
  Upload,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  updateProfile,
  clearError,
} from "../../Redux/User/userSlice";
import moment from "moment";
import { UploadOutlined } from "@ant-design/icons";

const DoctorProfile = () => {
  const dispatch = useDispatch();
  const {
    userInfo,
    loading: profileLoading,
    error: profileError,
  } = useSelector((state) => state.user);

  const {
    data: profile,
    error: profileErrorApi,
    isLoading,
  } = useGetDoctorProfileQuery();
  const [updateDoctorProfile] = useUpdateDoctorProfileMutation();

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
  const [images, setImages] = useState([]); // State để lưu danh sách hình ảnh

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

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

  useEffect(() => {
    if (profile && profile.data) {
      setFormData({
        specialty: profile.data.specialty || "",
        experience: profile.data.experience || "",
        qualifications: profile.data.qualifications || [],
      });
      setImages(profile.data.images || []); // Cập nhật danh sách hình ảnh nếu có
    }
  }, [profile]);

  const handleSpecialtySubmit = async () => {
    try {
      await updateDoctorProfile(formData).unwrap();
      message.success("Thông tin chuyên môn đã được cập nhật thành công!");
    } catch (error) {
      message.error("Cập nhật thông tin chuyên môn thất bại.");
    }
  };

  const handleProfileSubmit = async () => {
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

  const handleAvatarUpload = async ({ file }) => {
    const formData = new FormData();
    formData.append("images", file);

    try {
      await updateDoctorProfile(formData).unwrap();
      message.success("Hình đại diện đã được cập nhật thành công!");
      setImages([URL.createObjectURL(file)]); // Thay thế ảnh mới
    } catch (error) {
      message.error("Cập nhật hình đại diện thất bại.");
    }
  };

  useEffect(() => {
    if (profileError || profileErrorApi) {
      message.error(profileError || profileErrorApi);
      dispatch(clearError());
    }
  }, [profileError, profileErrorApi, dispatch]);

  if (isLoading || profileLoading) {
    return <div>Đang tải...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Hình đại diện */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "24px",
          justifyItems: "center",
        }}
      >
        {images.length > 0 ? (
          <img
            src={images[0]}
            alt="Hình đại diện"
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              marginBottom: 16,
            }}
          />
        ) : (
          <div>Chưa có hình đại diện</div>
        )}
        <Upload customRequest={handleAvatarUpload} showUploadList={false}>
          <Button icon={<UploadOutlined />}>Tải lên hình đại diện</Button>
        </Upload>
      </div>

      <Tabs defaultActiveKey="1">
        {/* Tab Thông tin cá nhân */}
        <Tabs.TabPane tab="Thông tin cá nhân" key="1">
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
        </Tabs.TabPane>

        {/* Tab Thông tin chuyên môn */}
        <Tabs.TabPane tab="Thông tin chuyên môn" key="2">
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
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default DoctorProfile;
