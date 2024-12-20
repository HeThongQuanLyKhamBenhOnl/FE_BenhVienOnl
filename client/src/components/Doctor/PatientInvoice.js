import React from "react";
import { useGetDoctorMedicalRecordsQuery } from "../../Redux/Doctor/api";

const PatientInvoice = () => {
  // Gọi API để lấy danh sách hồ sơ bệnh án của bác sĩ
  const { data, error, isLoading } = useGetDoctorMedicalRecordsQuery();

  if (isLoading) return <p style={styles.loading}>Đang tải dữ liệu...</p>;
  if (error) {
    console.error("Error fetching medical records:", error);
    return (
      <p style={styles.error}>Đã xảy ra lỗi khi tải thông tin hồ sơ bệnh án</p>
    );
  }

  const medicalRecords = data?.medicalRecords || [];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hóa Đơn Bệnh Nhân</h1>
      {medicalRecords.length === 0 ? (
        <p style={styles.noRecords}>Không có hồ sơ bệnh án nào.</p>
      ) : (
        medicalRecords.map((record, index) => (
          <div style={styles.recordCard} key={index}>
            <div style={styles.recordHeader}>
              <h2 style={styles.patientName}>
                Tên bệnh nhân: {record.patient.fullName}
              </h2>
              <h3>
                Trạng thái thanh toán:
                <span
                  style={{
                    ...styles.paymentStatus,
                    ...styles[record.paymentStatus.toLowerCase()],
                  }}
                >
                  {record.paymentStatus}
                </span>
              </h3>
            </div>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.tableHeader}>Tên thuốc</th>
                  <th style={styles.tableHeader}>Số lượng</th>
                  <th style={styles.tableHeader}>Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {record.prescribedMedicines.map((medicine, i) => (
                  <tr key={i}>
                    <td style={styles.tableCell}>
                      {medicine.medicine?.name || "N/A"}
                    </td>
                    <td style={styles.tableCell}>{medicine.quantity}</td>
                    <td style={styles.tableCell}>
                      {medicine.total.toLocaleString()} VNĐ
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "28px",
    color: "#e53935",
    textAlign: "center",
    marginBottom: "20px",
  },
  loading: {
    textAlign: "center",
    fontSize: "16px",
    color: "#555",
  },
  error: {
    textAlign: "center",
    fontSize: "16px",
    color: "#e53935",
  },
  noRecords: {
    textAlign: "center",
    fontSize: "16px",
    color: "#555",
  },
  recordCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  recordHeader: {
    marginBottom: "15px",
  },
  patientName: {
    margin: "0 0 10px",
    fontSize: "20px",
    color: "#333",
  },
  paymentStatus: {
    fontWeight: "bold",
    padding: "2px 8px",
    borderRadius: "4px",
    marginLeft: "8px",
  },
  paid: {
    backgroundColor: "#4caf50",
    color: "white",
  },
  unpaid: {
    backgroundColor: "#e53935",
    color: "white",
  },
  pending: {
    backgroundColor: "#ffa726",
    color: "white",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
  },
  tableHeader: {
    textAlign: "left",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    color: "#333",
    border: "1px solid #ddd",
  },
  tableCell: {
    textAlign: "left",
    padding: "10px",
    border: "1px solid #ddd",
    color: "#555",
  },
};

export default PatientInvoice;
