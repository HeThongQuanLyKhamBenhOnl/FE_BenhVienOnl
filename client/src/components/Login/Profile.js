import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  updateProfile,
  clearError,
} from "../../Redux/User/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const {
    userInfo,
    loading: profileLoading,
    error: profileError,
  } = useSelector((state) => state.user);

  // Tạo state để lưu trữ các giá trị trong form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [updateError, setUpdateError] = useState(null);

  useEffect(() => {
    dispatch(getProfile()); // Lấy thông tin người dùng từ API
  }, [dispatch]);

  // Cập nhật state với thông tin người dùng sau khi lấy được
  useEffect(() => {
    if (userInfo) {
      setName(userInfo.fullName || "");
      setEmail(userInfo.email || "");
      setPhone(userInfo.phone || "");
    }
  }, [userInfo]);

  // Xử lý khi người dùng cập nhật thông tin
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setUpdateError(null);

    const updatedData = { fullName: name, email, phone };

    try {
      const response = await dispatch(updateProfile(updatedData));

      if (response.meta.requestStatus === "fulfilled") {
        alert("Thông tin đã được cập nhật thành công!");
      } else {
        setUpdateError("Cập nhật thông tin thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      setUpdateError("Cập nhật thông tin thất bại. Vui lòng thử lại.");
    }
  };

  // Xử lý khi có lỗi từ API
  useEffect(() => {
    if (profileError) {
      alert(profileError);
      dispatch(clearError()); // Xóa lỗi sau khi hiển thị
    }
  }, [profileError, dispatch]);

  if (profileLoading) {
    return <p>Đang tải...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Thông tin cá nhân
        </h2>
        {updateError && (
          <p className="text-red-500 text-center mb-4">{updateError}</p>
        )}
        <form onSubmit={handleUpdateProfile} className="space-y-6">
          <div>
            <label className="block mb-2">Họ và tên</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              disabled // Không cho phép thay đổi email
            />
          </div>
          <div>
            <label className="block mb-2">Số điện thoại</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Cập nhật thông tin
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
