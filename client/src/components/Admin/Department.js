import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetAllDoctorsQuery } from "../../Redux/Doctor/api"; // Import API lấy danh sách bác sĩ
import { Table, Spin, Alert } from "antd";

const Department = () => {
  const { data, isLoading, error } = useGetAllDoctorsQuery(); // Gọi API để lấy danh sách bác sĩ

  const [specialties, setSpecialties] = useState([]);

  useEffect(() => {
    if (data?.doctors) {
      console.log("Danh sách bác sĩ trả về:", data.doctors); // Log dữ liệu API trả về
      const uniqueSpecialties = Array.from(
        new Set(
          data.doctors
            .filter((doctor) => doctor.specialty) // Lọc các bác sĩ có chuyên khoa
            .map((doctor) => doctor.specialty) // Lấy danh sách chuyên khoa
        )
      ).map((specialty, index) => ({
        id: index + 1, // Gán ID duy nhất cho từng chuyên khoa
        name: specialty, // Tên chuyên khoa
      }));

      console.log("Danh sách chuyên khoa duy nhất:", uniqueSpecialties);
      setSpecialties(uniqueSpecialties); // Lưu danh sách chuyên khoa vào state
    }
  }, [data]);

  // Cột của bảng hiển thị
  const columns = [
    {
      title: "STT", // Tiêu đề cột
      dataIndex: "id", // Lấy dữ liệu từ trường `id`
      key: "id",
      width: 50,
    },
    {
      title: "Chuyên Khoa", // Tiêu đề cột
      dataIndex: "name", // Lấy dữ liệu từ trường `name`
      key: "name",
      width: 200,
    },
  ];

  // Giao diện hiển thị
  return (
    <div className="p-8">
      <h2 style={style.header}>QUẢN LÝ CHUYÊN KHOA</h2>
      {/* Xử lý trạng thái hiển thị */}
      {isLoading ? (
        <Spin size="large" style={{ display: "block", margin: "20px auto" }} />
      ) : error ? (
        <Alert
          message="Lỗi"
          description="Không thể tải dữ liệu chuyên khoa, vui lòng thử lại."
          type="error"
          showIcon
        />
      ) : specialties.length === 0 ? (
        <Alert
          message="Thông báo"
          description="Hiện tại không có chuyên khoa nào."
          type="info"
          showIcon
        />
      ) : (
        <Table
          columns={columns} // Cấu hình cột
          dataSource={specialties} // Dữ liệu chuyên khoa
          rowKey="id" // Dùng trường `id` làm khóa duy nhất
          pagination={false} // Không hiển thị phân trang
        />
      )}
    </div>
  );
};

export default Department;

// Style cho tiêu đề
const style = {
  header: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "20px",
    fontWeight: "bold",
    color: "#009eff",
  },
};
