import React, { useState } from "react";
import { Spin, Card, Button, Modal } from "antd";
import HeaderComponent from "../Header/Header";
import {
  useGetAllDoctorsQuery,
  useGetDoctorByIdQuery,
} from "../../Redux/Doctor/api"; // Import cả API slice và API chi tiết
import doctor1 from "../../img/doctor1.png";
import { Navigate, useNavigate } from "react-router-dom";

const CreateAppoiment = () => {
  const Navigate = useNavigate();
  const { data: doctors, isLoading, error } = useGetAllDoctorsQuery(); // Gọi API để lấy danh sách bác sĩ
  const [selectedSpecialty, setSelectedSpecialty] = useState(null); // State để lưu chuyên khoa được chọn
  const [selectedDoctorId, setSelectedDoctorId] = useState(null); // State để lưu doctorId được chọn
  const {
    data: selectedDoctor,
    isLoading: isLoadingDoctor,
    error: doctorError,
  } = useGetDoctorByIdQuery(selectedDoctorId, {
    skip: !selectedDoctorId, // Bỏ qua gọi API nếu chưa có doctorId
  });

  if (isLoading) return <Spin size="large" />;
  if (error) return <p>Đã xảy ra lỗi khi lấy danh sách bác sĩ!</p>;

  // Tạo danh sách chuyên khoa từ dữ liệu bác sĩ
  const specialties = Array.from(
    new Set(doctors?.doctors?.map((doctor) => doctor.specialty))
  );

  // Hàm lọc bác sĩ theo chuyên khoa
  const filteredDoctors = doctors?.doctors?.filter((doctor) =>
    selectedSpecialty ? doctor.specialty === selectedSpecialty : true
  );

  // Hàm xử lý mở modal để xem chi tiết bác sĩ
  const handleViewDetails = (doctorId) => {
    setSelectedDoctorId(doctorId); // Lưu doctorId để gọi API lấy chi tiết
  };

  // Hàm đóng Modal và reset lại doctorId
  const handleCloseModal = () => {
    setSelectedDoctorId(null); // Reset lại doctorId khi đóng modal
  };
  const handleBookAppointment = (doctorId) => {
    Navigate(`/bookingAppointment/${doctorId}`); // Điều hướng sang trang đặt lịch với doctorId
  };

  return (
    <div>
      <HeaderComponent />
      <div className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row">
          {/* Cột trái: Chuyên khoa */}
          <div className="w-full md:w-1/4 bg-blue-100 p-4">
            <h3 className="text-xl font-bold text-black">Chuyên khoa</h3>
            <ul className="space-y-2">
              {specialties.map((specialty, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedSpecialty(specialty)} // Lọc bác sĩ theo chuyên khoa khi click
                  className={`text-lg cursor-pointer ${
                    selectedSpecialty === specialty
                      ? "text-blue-600 font-bold"
                      : ""
                  }`}
                >
                  {specialty}
                </li>
              ))}
              <li
                onClick={() => setSelectedSpecialty(null)} // Hiển thị tất cả bác sĩ khi không chọn chuyên khoa nào
                className={`text-lg cursor-pointer ${
                  selectedSpecialty === null ? "text-blue-600 font-bold" : ""
                }`}
              >
                Tất cả chuyên khoa
              </li>
            </ul>
          </div>

          {/* Cột phải: Thông tin bác sĩ */}
          <div className="w-full md:w-3/4 p-4">
            {filteredDoctors?.map((doctor) => (
              <Card key={doctor._id} className="mb-4 p-4">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <img
                      src={doctor1}
                      alt="Doctor"
                      className="w-full rounded-md"
                    />
                  </div>
                  <div className="md:w-2/3 md:ml-6">
                    <h3 className="text-2xl font-bold text-blue-600">
                      PGS.TS.BS {doctor?.user?.fullName}
                    </h3>
                    <p className="text-lg">
                      <strong>Chuyên khoa:</strong> {doctor?.specialty}
                    </p>
                    <p className="text-lg">
                      <strong>Kinh nghiệm:</strong> {doctor?.experience} năm
                    </p>
                    <p className="text-lg">
                      <strong>Bằng cấp:</strong>{" "}
                      {doctor?.qualifications?.map((qual, index) => (
                        <span key={index}>
                          {qual}
                          {index < doctor?.qualifications.length - 1
                            ? ", "
                            : ""}
                        </span>
                      ))}
                    </p>
                    <div className="mt-4 flex justify-center space-x-4">
                      <Button
                        type="primary"
                        onClick={() => handleViewDetails(doctor._id)} // Gọi hàm để xem chi tiết
                      >
                        Xem Chi Tiết
                      </Button>
                      <Button
                        type="primary"
                        className="bg-blue-600"
                        onClick={() => handleBookAppointment(doctor._id)}
                      >
                        Đặt Lịch Khám
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Modal
        title="Thông Tin Chi Tiết Bác Sĩ"
        visible={!!selectedDoctorId} // Hiển thị modal khi đã chọn doctorId
        onCancel={handleCloseModal} // Đóng modal và reset doctorId
        footer={null} // Không có footer
      >
        {isLoadingDoctor ? (
          <Spin size="large" />
        ) : doctorError ? (
          <p>Đã xảy ra lỗi khi lấy thông tin bác sĩ!</p>
        ) : (
          selectedDoctor?.doctor && ( // Chỉ render khi `selectedDoctor` có đối tượng `doctor`
            <div>
              <h3 className="text-xl font-bold text-blue-600">
                PGS.TS.BS {selectedDoctor.doctor?.user?.fullName}
              </h3>
              <p>
                <strong>Chuyên khoa:</strong> {selectedDoctor.doctor?.specialty}
              </p>
              <p>
                <strong>Kinh nghiệm:</strong>{" "}
                {selectedDoctor.doctor?.experience} năm
              </p>
              <p>
                <strong>Bằng cấp:</strong>{" "}
                {selectedDoctor.doctor?.qualifications?.length > 0
                  ? selectedDoctor.doctor?.qualifications.join(", ")
                  : "Không có thông tin"}
              </p>
              <p>
                <strong>Email:</strong> {selectedDoctor.doctor?.user?.email}
              </p>
              <p>
                <strong>Số điện thoại:</strong>{" "}
                {selectedDoctor.doctor?.user?.phone}
              </p>
              <p>
                <strong>Địa chỉ:</strong> {selectedDoctor.doctor?.user?.address}
              </p>
            </div>
          )
        )}
      </Modal>
    </div>
  );
};

export default CreateAppoiment;
