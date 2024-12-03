import React, { useState } from "react";
import { Table, Spin, Alert, Button, Modal } from "antd";
import { useGetAllMedicalRecordsQuery } from "../../Redux/Doctor/api";

const ManageAllRecord = () => {
  const { data, isLoading, error } = useGetAllMedicalRecordsQuery();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const showModal = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setSelectedRecord(null);
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Bệnh Nhân",
      dataIndex: ["patient", "fullName"],
      key: "patient",
      render: (text, record) => record.patient?.fullName || "Không rõ",
    },
    {
      title: "Bác Sĩ",
      dataIndex: ["doctor", "fullName"],
      key: "doctor",
      render: (text, record) => record.doctor?.fullName || "Không rõ",
    },
    {
      title: "Ngày Hẹn",
      dataIndex: ["appointment", "date"],
      key: "date",
      render: (text, record) =>
        record.appointment?.date
          ? new Date(record.appointment.date).toLocaleDateString("vi-VN")
          : "Không rõ",
    },
    {
      title: "Lý Do Khám",
      dataIndex: ["appointment", "reasonForVisit"],
      key: "reasonForVisit",
      render: (text, record) =>
        record.appointment?.reasonForVisit || "Không rõ",
    },
    {
      title: "Hành Động",
      key: "action",
      render: (text, record) => (
        <Button type="primary" onClick={() => showModal(record)}>
          Xem
        </Button>
      ),
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>QUẢN LÝ HỒ SƠ BỆNH ÁN</h2>
      {isLoading ? (
        <Spin size="large" style={styles.spinner} />
      ) : error ? (
        <Alert
          message="Lỗi"
          description="Không thể tải danh sách hồ sơ bệnh án, vui lòng thử lại."
          type="error"
          showIcon
        />
      ) : data?.medicalRecords?.length === 0 ? (
        <Alert
          message="Thông Báo"
          description="Hiện tại không có hồ sơ bệnh án nào."
          type="info"
          showIcon
        />
      ) : (
        <Table
          columns={columns}
          dataSource={data?.medicalRecords.map((record, index) => ({
            ...record,
            key: index,
          }))}
          pagination={{ pageSize: 10 }}
        />
      )}

      {/* Modal hiển thị chi tiết hồ sơ */}
      <Modal
        title="Chi Tiết Hồ Sơ Bệnh Án"
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}
        width={1000} // Tăng chiều rộng modal
        bodyStyle={styles.modalBody} // Áp dụng style cho phần thân modal
      >
        {selectedRecord ? (
          <div style={styles.detailContainer}>
            <p style={styles.detailText}>
              <strong>Bệnh Nhân:</strong>{" "}
              {selectedRecord.patient?.fullName || "Không rõ"}
            </p>
            <p style={styles.detailText}>
              <strong>Bác Sĩ:</strong>{" "}
              {selectedRecord.doctor?.fullName || "Không rõ"}
            </p>
            <p style={styles.detailText}>
              <strong>Ngày Hẹn:</strong>{" "}
              {selectedRecord.appointment?.date
                ? new Date(selectedRecord.appointment.date).toLocaleDateString(
                    "vi-VN"
                  )
                : "Không rõ"}
            </p>
            <p style={styles.detailText}>
              <strong>Chẩn Đoán:</strong>{" "}
              {selectedRecord.diagnosis || "Không có thông tin"}
            </p>
            <p style={styles.detailText}>
              <strong>Điều Trị:</strong>{" "}
              {selectedRecord.treatment || "Không có thông tin"}
            </p>
            <p style={styles.detailText}>
              <strong>Ghi Chú:</strong> {selectedRecord.notes || "Không có"}
            </p>
            <h4 style={styles.medicineHeader}>Thuốc Được Kê Đơn:</h4>
            {selectedRecord.prescribedMedicines?.length > 0 ? (
              <Table
                dataSource={selectedRecord.prescribedMedicines.map(
                  (medicine, index) => ({
                    ...medicine,
                    key: index,
                  })
                )}
                columns={[
                  {
                    title: "Tên Thuốc",
                    dataIndex: ["medicine", "name"],
                    key: "medicine",
                    render: (text, record) =>
                      record.medicine?.name || "Không rõ",
                  },
                  {
                    title: "Số Lượng",
                    dataIndex: "quantity",
                    key: "quantity",
                  },
                  {
                    title: "Giá",
                    dataIndex: "price",
                    key: "price",
                    render: (text) => `${text} VND`,
                  },
                  {
                    title: "Thành Tiền",
                    dataIndex: "total",
                    key: "total",
                    render: (text) => `${text} VND`,
                  },
                ]}
                pagination={false}
                style={styles.table}
              />
            ) : (
              <p>Không có thông tin thuốc được kê đơn.</p>
            )}
          </div>
        ) : (
          <Spin size="large" />
        )}
      </Modal>
    </div>
  );
};

export default ManageAllRecord;

// Styles
const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f7f9fc",
    borderRadius: "8px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#009eff",
    marginBottom: "20px",
  },
  spinner: {
    display: "block",
    margin: "20px auto",
  },
  modalBody: {
    padding: "20px", // Tăng khoảng cách bên trong modal
    fontSize: "1.2rem", // Tăng cỡ chữ
  },
  detailContainer: {
    lineHeight: "1.8", // Tăng khoảng cách dòng
  },
  detailText: {
    marginBottom: "15px", // Khoảng cách giữa các đoạn văn bản
    fontSize: "1.2rem", // Cỡ chữ to hơn
    color: "#333",
  },
  medicineHeader: {
    marginTop: "20px",
    marginBottom: "10px",
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#009eff",
  },
  table: {
    marginTop: "10px", // Khoảng cách giữa bảng và các nội dung khác
  },
};
