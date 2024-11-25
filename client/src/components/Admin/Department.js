import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors } from "../../Redux/User/userSlice";
import { Button, Table, message } from "antd";

const Department = () => {
  const dispatch = useDispatch();
  const { doctors, loading, error } = useSelector((state) => state.user);

  const [specialties, setSpecialties] = useState([]);

  useEffect(() => {
    dispatch(getAllDoctors())
      .unwrap()
      .then((data) => {
        console.log("Danh sách bác sĩ trả về:", data); // Kiểm tra dữ liệu API
        const uniqueSpecialties = Array.from(
          new Set(
            data
              .filter((doctor) => doctor.specialty)
              .map((doctor) => doctor.specialty)
          )
        ).map((specialty, index) => ({
          id: index + 1,
          name: specialty,
        }));

        setSpecialties(uniqueSpecialties);
      })
      .catch(() => {
        message.error("Không thể tải danh sách chuyên khoa.");
      });
  }, [dispatch]);

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
      key: "id",
      width: 50,
    },
    {
      title: "Chuyên Khoa",
      dataIndex: "name", // Sử dụng trường "name"
      key: "name",
      width: 150,
    },
  ];

  return (
    <div className="p-8">
      <h2 style={style.header}>QUẢN LÝ CHUYÊN KHOA</h2>

      {/* Nút thêm chuyên khoa */}
      <div className="flex justify-start mt-4" style={{ marginBottom: "20px" }}>
        <Button type="primary">
          <p
            style={{
              fontWeight: "600",
              fontSize: "1rem",
              margin: "10px",
            }}
          >
            Thêm
          </p>
        </Button>
      </div>

      {/* Bảng dữ liệu */}
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : error ? (
        <p>Có lỗi xảy ra: {error}</p>
      ) : specialties.length === 0 ? (
        <p>Hiện tại không có chuyên khoa nào.</p>
      ) : (
        <Table
          columns={columns}
          dataSource={specialties}
          rowKey="id"
          pagination={false}
        />
      )}
    </div>
  );
};

export default Department;

const style = {
  header: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "10px",
    fontWeight: "bold",
    color: "#009eff",
  },
};
