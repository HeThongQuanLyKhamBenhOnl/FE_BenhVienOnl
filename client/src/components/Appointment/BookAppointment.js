import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Select, Input, Button, message } from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
import { useCreateAppointmentMutation } from "../../Redux/Appointment/api";
import { useGetScheduleQuery } from "../../Redux/Doctor/api";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";

const { Option, OptGroup } = Select;

const BookAppointment = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [createAppointment, { isLoading }] = useCreateAppointmentMutation();

  const user = useSelector((state) => state.user.userInfo);

  const {
    data: scheduleData,
    isLoading: isScheduleLoading,
    error,
  } = useGetScheduleQuery(doctorId);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedShift, setSelectedShift] = useState(null);
  const [reasonForVisit, setReasonForVisit] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("pending");

  if (error) {
    message.error("Không thể tải lịch làm việc của bác sĩ.");
  }

  const handleSubmit = async () => {
    if (!selectedDate || !selectedShift || !reasonForVisit) {
      return message.error("Vui lòng điền đầy đủ thông tin!");
    }

    const appointmentData = {
      doctorId,
      date: selectedDate,
      shift: selectedShift,
      reasonForVisit,
      notes,
      status,
    };

    try {
      await createAppointment(appointmentData).unwrap();
      message.success("Đặt lịch hẹn thành công!");
      navigate("/");
    } catch (error) {
      message.error("Đặt lịch hẹn thất bại!");
    }
  };

  return (
    <div>
      <HeaderComponent />
      <div style={styles.container}>
        <div style={styles.wrapper}>
          <div style={styles.notesContainer}>
            <h3 style={styles.notesTitle}>Lưu ý :</h3>
            <p style={styles.noteText}>
              Lịch hẹn có hiệu lực sau khi có xác nhận chính thức từ phòng khám.
            </p>
            <p style={styles.noteText}>
              Vui lòng cung cấp thông tin chính xác để được phục vụ tốt nhất.
            </p>
          </div>

          <div style={styles.formContainer}>
            <h2 style={styles.title}>Đăng Ký Khám</h2>
            <form style={styles.form}>
              <div style={styles.formGroup}>
                <Input
                  placeholder="Họ và Tên"
                  value={user?.fullName || ""}
                  disabled
                  style={styles.inputBold}
                />
                <Input
                  placeholder="Email"
                  value={user?.email || ""}
                  disabled
                  style={styles.inputBold}
                />
              </div>
              <div style={styles.formGroup}>
                <Input
                  placeholder="Ngày Sinh"
                  value={moment(user?.dateOfBirth).format("DD/MM/YYYY")}
                  disabled
                  style={styles.inputBold}
                />
                <Input
                  placeholder="Giới Tính"
                  value={user?.gender || ""}
                  disabled
                  style={styles.inputBold}
                />
              </div>
              <div style={styles.formGroup}>
                <Input
                  placeholder="Địa Chỉ"
                  value={user?.address || ""}
                  disabled
                  style={styles.inputBold}
                />
                <Input
                  placeholder="Số điện thoại"
                  value={user?.phone || ""}
                  disabled
                  style={styles.inputBold}
                />
              </div>

              <div style={styles.formGroup}>
                <Select
                  placeholder="Chọn Lịch Khám"
                  onChange={(value) => {
                    const [selectedDate, selectedShift] = value.split("|"); // Sử dụng '|' làm phân tách
                    setSelectedDate(selectedDate);
                    setSelectedShift(selectedShift);
                  }}
                  loading={isScheduleLoading}
                  style={styles.selectStyled}
                  optionLabelProp="label"
                >
                  {scheduleData?.schedule &&
                    Object.entries(
                      scheduleData.schedule
                        .flatMap((item) => item.schedule)
                        .reduce((acc, slot) => {
                          if (!acc[slot.date]) acc[slot.date] = [];
                          acc[slot.date].push(slot);
                          return acc;
                        }, {})
                    ).map(([date, slots]) => (
                      <OptGroup
                        key={date}
                        label={new Date(date).toLocaleDateString("vi-VN")}
                      >
                        {slots.map((slot) => (
                          <Option
                            key={`${date}|${slot.shift}`} // Sử dụng '|' làm ký tự phân tách
                            value={`${date}|${slot.shift}`} // Giá trị chứa cả ngày và ca
                            label={`${new Date(date).toLocaleDateString(
                              "vi-VN"
                            )} - ${
                              slot.shift === "morning"
                                ? "Buổi sáng"
                                : slot.shift === "afternoon"
                                ? "Buổi chiều"
                                : "Buổi tối"
                            }`}
                          >
                            {slot.shift === "morning"
                              ? "Buổi sáng"
                              : slot.shift === "afternoon"
                              ? "Buổi chiều"
                              : "Buổi tối"}
                          </Option>
                        ))}
                      </OptGroup>
                    ))}
                </Select>
              </div>

              <div style={styles.formGroup}>
                <Input.TextArea
                  rows={4}
                  placeholder="Lý Do Khám"
                  value={reasonForVisit}
                  onChange={(e) => setReasonForVisit(e.target.value)}
                  style={styles.textArea}
                />
              </div>
              <div style={styles.formGroup}>
                <Input.TextArea
                  rows={4}
                  placeholder="Triệu chứng hoặc ghi chú thêm"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={styles.textArea}
                />
              </div>
              <Button
                type="primary"
                onClick={handleSubmit}
                loading={isLoading}
                style={styles.submitButton}
              >
                {isLoading ? "Đang Đặt..." : "Xác Nhận Đặt Lịch"}
              </Button>
            </form>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f9",
    minHeight: "100vh",
    padding: "20px",
  },
  wrapper: {
    display: "flex",
    gap: "20px",
    maxWidth: "1200px",
    width: "100%",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    flex: 1,
  },
  notesContainer: {
    flex: 0.5,
    backgroundColor: "#007bff",
    padding: "20px",
    borderRadius: "12px",
    color: "#fff",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  formGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  selectStyled: {
    width: "100%",
    borderRadius: "8px",
  },
  inputBold: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
    fontWeight: "bold",
    color: "#333",
    backgroundColor: "#f9f9f9",
    fontSize: "16px",
  },
  textArea: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
  },
  submitButton: {
    width: "200px",
    alignSelf: "center",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    borderRadius: "8px",
  },
  notesTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  noteText: {
    fontSize: "14px",
    color: "#fff",
    marginBottom: "10px",
  },
};

export default BookAppointment;
