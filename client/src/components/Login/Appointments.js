import React from "react";
import { useGetAppointmentsQuery } from "../../Redux/Appointment/api";
import moment from "moment";

const Appointments = () => {
  const {
    data: appointmentsData,
    isLoading: appointmentsLoading,
    error: appointmentsError,
  } = useGetAppointmentsQuery();

  if (appointmentsLoading) {
    return <p style={styles.loading}>Đang tải...</p>;
  }

  const appointments = appointmentsData?.appointments || [];

  // Hàm chuyển đổi trạng thái
  const getStatusLabel = (status) => {
    switch (status) {
      case "pending":
        return "Đang chờ";
      case "Completed":
        return "Xác nhận";
      default:
        return status; // Giữ nguyên trạng thái khác
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <h2 style={styles.title}>Lịch hẹn của bạn</h2>
        {appointmentsError && (
          <p style={styles.error}>Đã xảy ra lỗi khi tải lịch hẹn</p>
        )}
        {appointments.length === 0 ? (
          <p style={styles.noAppointments}>Bạn chưa có lịch hẹn nào.</p>
        ) : (
          <ul style={styles.appointmentList}>
            {appointments.map((appointment) => (
              <li key={appointment._id} style={styles.appointmentCard}>
                {appointment.doctor ? (
                  <>
                    <p>
                      <strong>Bác sĩ:</strong>{" "}
                      <span style={styles.doctorName}>
                        {appointment.doctor.fullName}
                      </span>
                    </p>
                    <p>
                      <strong>Chuyên khoa:</strong>{" "}
                      <span style={styles.specialty}>
                        {appointment.doctor.specialty}
                      </span>
                    </p>
                  </>
                ) : (
                  <p>Không có bác sĩ được chỉ định</p>
                )}
                <p>
                  <strong>Ngày:</strong>{" "}
                  <span style={styles.date}>
                    {moment(appointment.date).format("DD/MM/YYYY")}
                  </span>
                </p>
                <p>
                  <strong>Ca khám:</strong>{" "}
                  <span style={styles.time}>
                    {appointment.shift === "morning"
                      ? "Buổi sáng"
                      : appointment.shift === "afternoon"
                      ? "Buổi trưa"
                      : "Buổi tối"}
                  </span>
                </p>
                <p>
                  <strong>Lý do khám:</strong>{" "}
                  <span style={styles.reason}>
                    {appointment.reasonForVisit}
                  </span>
                </p>
                {appointment.notes && (
                  <p>
                    <strong>Ghi chú:</strong>{" "}
                    <span style={styles.notes}>{appointment.notes}</span>
                  </p>
                )}
                <p>
                  <strong>Trạng thái:</strong>{" "}
                  <span style={styles.status}>
                    {getStatusLabel(appointment.status)}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f6f9",
    padding: "20px",
  },
  wrapper: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    width: "100%",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  error: {
    color: "#ff4d4f",
    textAlign: "center",
    marginBottom: "20px",
  },
  noAppointments: {
    textAlign: "center",
    color: "#666",
    fontSize: "16px",
  },
  appointmentList: {
    listStyle: "none",
    padding: 0,
  },
  appointmentCard: {
    backgroundColor: "#f9f9f9",
    border: "1px solid #e0e0e0",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
  },
  doctorName: {
    color: "#007bff",
    fontWeight: "bold",
  },
  specialty: {
    color: "#007bff",
  },
  date: {
    color: "#28a745",
  },
  time: {
    color: "#6c757d",
  },
  reason: {
    color: "#333",
  },
  notes: {
    color: "#666",
  },
  status: {
    color: "#17a2b8",
  },
};

export default Appointments;
