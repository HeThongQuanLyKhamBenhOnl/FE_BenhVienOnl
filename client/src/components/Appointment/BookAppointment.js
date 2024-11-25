import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DatePicker, Select, Input, Button, message } from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
import { useCreateAppointmentMutation } from "../../Redux/Appointment/api";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";

const { Option } = Select;

const BookAppointment = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [createAppointment, { isLoading }] = useCreateAppointmentMutation();

  const user = useSelector((state) => state.user.userInfo);

  const [date, setDate] = useState(null);
  const [shift, setShift] = useState(null);
  const [reasonForVisit, setReasonForVisit] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async () => {
    if (!date || !shift || !reasonForVisit) {
      return message.error("Vui lòng nhập đầy đủ thông tin!");
    }

    // Định dạng dữ liệu để gửi lên API
    const appointmentData = {
      doctorId,
      date: date.format("YYYY-MM-DD"), // Định dạng ngày thành YYYY-MM-DD
      shift, // Buổi khám
      reasonForVisit,
      notes,
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
          {/* Lưu ý */}
          <div style={styles.notesContainer}>
            <h3 style={styles.notesTitle}>Lưu ý :</h3>
            <p style={styles.noteText}>
              Lịch hẹn có hiệu lực sau khi có xác nhận chính thức từ Phòng khám
              Bệnh viện .
            </p>
            <p style={styles.noteText}>
              Quý khách hàng vui lòng cung cấp thông tin chính xác để được phục
              vụ tốt nhất. Trong trường hợp cung cấp sai thông tin email & điện
              thoại, việc xác nhận cuộc hẹn sẽ không hiệu lực.
            </p>
            <p style={styles.noteText}>
              Quý khách sử dụng dịch vụ đặt hẹn trực tuyến, xin vui lòng đặt
              trước ít nhất là 24 giờ trước khi đến khám.
            </p>
            <p style={styles.noteText}>
              Trong trường hợp khẩn cấp hoặc nghi ngờ có các triệu chứng nguy
              hiểm, quý khách vui lòng đến trực tiếp Phòng khám hoặc các trung
              tâm y tế gần nhất để kịp thời xử lý.
            </p>
          </div>

          {/* Form đăng ký */}
          <div style={styles.formContainer}>
            <h2 style={styles.title}>Đăng Ký Khám</h2>
            <p style={styles.subtitle}>
              Vui lòng điền thông tin vào form bên dưới để đăng ký khám bệnh
              theo yêu cầu
            </p>
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
                  placeholder="Số Điện Thoại"
                  value={user?.phone || ""}
                  disabled
                  style={styles.inputBold}
                />
              </div>
              <div style={styles.formGroup}>
                <Input
                  placeholder="Giới Tính"
                  value={user?.gender || ""}
                  disabled
                  style={styles.inputBold}
                />
                <Input
                  placeholder="Địa Chỉ"
                  value={user?.address || ""}
                  disabled
                  style={styles.inputBold}
                />
              </div>
              <div style={styles.formGroup}>
                <DatePicker
                  placeholder="Ngày Khám"
                  onChange={(value) => setDate(value)}
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <Select
                  placeholder="Chọn Ca Khám"
                  onChange={(value) => setShift(value)}
                  style={styles.input}
                >
                  <Option value="morning">Buổi sáng</Option>
                  <Option value="afternoon">Buổi trưa</Option>
                  <Option value="evening">Buổi tối</Option>
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
  subtitle: {
    textAlign: "center",
    color: "#666",
    fontSize: "16px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
  },
  inputBold: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
    fontWeight: "bold",
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
