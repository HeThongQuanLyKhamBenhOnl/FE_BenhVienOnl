import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpdatedMedicalRecords } from "../../Redux/User/userSlice";

const Invoice = () => {
  const dispatch = useDispatch();
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  // Lấy trạng thái từ Redux store
  const { updatedMedicalRecords, loading, error } = useSelector((state) => ({
    updatedMedicalRecords: state.user.updatedMedicalRecords,
    loading: state.user.loading,
    error: state.user.error,
  }));

  // Gọi API khi component được render hoặc sau khi thanh toán thành công
  useEffect(() => {
    dispatch(getUpdatedMedicalRecords());
  }, [dispatch, isPaymentComplete]);

  // Kiểm tra trạng thái thanh toán sau khi người dùng trở lại từ cổng thanh toán
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const orderCode = params.get("orderCode");
    const status = params.get("status");

    if (status === "PAID" && orderCode) {
      // Thanh toán thành công, cập nhật trạng thái
      fetch(
        `/api/medical-records/payment-success?orderCode=${orderCode}&status=${status}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setIsPaymentComplete(true);
          }
        })
        .catch((err) => console.error("Error verifying payment:", err));
    }
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p>Đã xảy ra lỗi: {error}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hóa Đơn Bệnh Nhân</h1>
      {updatedMedicalRecords.length === 0 ? (
        <p style={styles.noRecords}>Không có hóa đơn nào.</p>
      ) : (
        updatedMedicalRecords.map((record, index) => (
          <div key={index} style={styles.recordCard}>
            <h3 style={styles.paymentStatus}>
              Trạng thái thanh toán:
              <span
                style={{
                  ...styles.statusBadge,
                  ...styles[record.paymentStatus?.toLowerCase()],
                }}
              >
                {record.paymentStatus}
              </span>
            </h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.tableHeader}>Tên thuốc</th>
                  <th style={styles.tableHeader}>Số lượng</th>
                  <th style={styles.tableHeader}>Đơn giá</th>
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
                      {medicine.price?.toLocaleString()} VNĐ
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {record.paymentStatus !== "Paid" && record.paymentLink && (
              <button
                style={styles.paymentButton}
                onClick={() => window.open(record.paymentLink, "_blank")}
              >
                Thanh Toán
              </button>
            )}
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
  paymentStatus: {
    fontSize: "16px",
    color: "#555",
  },
  statusBadge: {
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
  paymentButton: {
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#e53935",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Invoice;
