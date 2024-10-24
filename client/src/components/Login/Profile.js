import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, updateProfile, clearError } from "../../Redux/User/userSlice"; // Sử dụng các action từ slice người dùng
import { useGetAppointmentsQuery } from "../../Redux/Appointment/api"; // Sử dụng hook để lấy danh sách lịch hẹn từ RTK slice
import moment from 'moment';

const Profile = () => {
  const dispatch = useDispatch();
  const { userInfo, loading: profileLoading, error: profileError } = useSelector((state) => state.user);
  const { data: appointmentsData, isLoading: appointmentsLoading, error: appointmentsError } = useGetAppointmentsQuery(); // Lấy danh sách lịch hẹn

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

  if (profileLoading || appointmentsLoading) {
    return <p>Đang tải...</p>;
  }

  // Kiểm tra nếu appointmentsData là mảng, nếu không thì gán là mảng rỗng
  const appointments = appointmentsData?.appointments || [];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Thông tin cá nhân</h2>
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

      {/* Hiển thị lịch hẹn đã đặt */}
      <div className="bg-white p-8 mt-10 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Lịch hẹn của bạn</h2>
        {appointmentsError && <p className="text-red-500">Đã xảy ra lỗi khi tải lịch hẹn</p>}
        {appointments.length === 0 ? (
          <p className="text-center">Bạn chưa có lịch hẹn nào.</p>
        ) : (
          <ul className="space-y-4">
            {appointments.map((appointment) => (
              <li key={appointment._id} className="border p-4 rounded-lg shadow">
                <p>
                  <strong>Bác sĩ:</strong> {appointment.doctor.user.fullName}
                </p>
                <p>
                  <strong>Chuyên khoa:</strong> {appointment.doctor.specialty}
                </p>
                <p>
                  <strong>Ngày:</strong> {moment(appointment.date).format("DD/MM/YYYY")}
                </p>
                <p>
                  <strong>Giờ:</strong> {appointment.startTime} - {appointment.endTime}
                </p>
                <p>
                  <strong>Lý do khám:</strong> {appointment.reasonForVisit}
                </p>
                {appointment.notes && (
                  <p>
                    <strong>Ghi chú:</strong> {appointment.notes}
                  </p>
                )}
                <p>
                  <strong>Trạng thái:</strong> {appointment.status}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Profile;
