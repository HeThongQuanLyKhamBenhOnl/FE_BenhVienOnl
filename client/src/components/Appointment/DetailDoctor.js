import React from "react";
import { useParams } from "react-router-dom"; // Để lấy doctorId từ URL
import { Spin } from "antd";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";
import { useGetDoctorByIdQuery } from "../../Redux/Doctor/api"; // Import API để lấy chi tiết bác sĩ
import doctor1 from "../../img/doctor1.png"; // Hình ảnh của bác sĩ (thay đổi theo ảnh của bạn)

const DetailDoctor = () => {
  const { doctorId } = useParams(); // Lấy doctorId từ URL
  const {
    data: selectedDoctor,
    isLoading,
    error,
  } = useGetDoctorByIdQuery(doctorId);

  if (isLoading) return <Spin size="large" />;
  if (error) return <p>Đã xảy ra lỗi khi lấy thông tin bác sĩ!</p>;

  return (
    <div className="container mx-auto py-6">
      <HeaderComponent />
      {selectedDoctor?.doctor && (
        <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-md p-6 rounded-md">
          {/* Hình ảnh bác sĩ */}
          <div className="w-full md:w-1/2">
            <img
              src={doctor1}
              alt="Doctor"
              className="w-full h-auto rounded-md object-cover"
            />
          </div>

          {/* Thông tin bác sĩ */}
          <div className="w-full md:w-1/2 text-center md:text-left p-4">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              PGS.TS.BS {selectedDoctor.doctor?.user?.fullName}
            </h2>
            <p className="text-lg mb-2">
              <strong>Học hàm học vị:</strong> PGS.TS.BS
            </p>
            <p className="text-lg mb-2">
              <strong>Kinh nghiệm:</strong> {selectedDoctor.doctor?.experience}{" "}
              năm
            </p>
            <p className="text-lg mb-2">
              <strong>Chức vụ:</strong> Chuyên gia{" "}
              {selectedDoctor.doctor?.specialty}
            </p>

            <button className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-full flex items-center justify-center">
              <i className="mr-2 fa fa-calendar"></i>
              ĐẶT LỊCH KHÁM
            </button>
          </div>
        </div>
      )}
      <FooterComponent />
    </div>
  );
};

export default DetailDoctor;
