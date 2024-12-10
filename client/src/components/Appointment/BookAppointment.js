import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Select, Input, Button, message, Typography } from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
import { useCreateAppointmentMutation } from "../../Redux/Appointment/api";
import {
  useGetScheduleQuery,
  useGetDoctorByIdQuery,
} from "../../Redux/Doctor/api";
import HeaderComponent from "../Header/Header";
import FooterComponent from "../component/Footer";

const { Option, OptGroup } = Select;
const { Title, Text } = Typography;

const BookAppointment = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [createAppointment, { isLoading }] = useCreateAppointmentMutation();
  const user = useSelector((state) => state.user.userInfo);

  const { data: doctorData, isLoading: isDoctorLoading } =
    useGetDoctorByIdQuery(doctorId);

  const {
    data: scheduleData,
    isLoading: isScheduleLoading,
    error,
  } = useGetScheduleQuery(doctorId);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedShift, setSelectedShift] = useState(null);
  const [reasonForVisit, setReasonForVisit] = useState("");
  const [notes, setNotes] = useState("");
  const [status] = useState("pending");

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
          {/* Thông tin bác sĩ */}
          <div style={styles.doctorInfoContainer}>
            {isDoctorLoading ? (
              <Text>Đang tải thông tin bác sĩ...</Text>
            ) : doctorData?.doctor ? (
              <>
                <Title level={4} style={styles.doctorTitle}>
                  Thông Tin Bác Sĩ
                </Title>
                <img
                  src={doctorData?.doctor?.images?.[0] || "default-image-url"}
                  alt="Doctor"
                  style={styles.doctorImage} // Thêm style mới
                />
                <Text>
                  <strong>Bác Sĩ:</strong> {doctorData.doctor.user.fullName}
                </Text>
                <br />
                <Text>
                  <strong>Email:</strong> {doctorData.doctor.user.email}
                </Text>
                <br />
                <Text>
                  <strong>Số điện thoại:</strong> {doctorData.doctor.user.phone}
                </Text>
                <br />
                <Text>
                  <strong>Chuyên khoa:</strong> {doctorData.doctor.specialty}
                </Text>
                <br />
                <Text>
                  <strong>Kinh nghiệm:</strong> {doctorData.doctor.experience}{" "}
                  năm
                </Text>
              </>
            ) : (
              <Text>Không tìm thấy thông tin bác sĩ</Text>
            )}
          </div>

          {/* Form Đăng Ký */}
          <div style={styles.formContainer}>
            <Title level={3} style={styles.title}>
              Đăng Ký Khám
            </Title>
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
                    const [selectedDate, selectedShift] = value.split("|");
                    setSelectedDate(selectedDate);
                    setSelectedShift(selectedShift);
                  }}
                  loading={isScheduleLoading}
                  style={styles.selectStyled}
                >
                  {scheduleData?.schedule &&
                    Object.entries(
                      scheduleData.schedule
                        .flatMap((item) => item.schedule)
                        .reduce((acc, slot) => {
                          const today = new Date();
                          const slotDate = new Date(slot.date);

                          // Lọc chỉ lấy lịch khám từ ngày hiện tại trở về sau
                          if (slotDate >= today) {
                            if (!acc[slot.date]) acc[slot.date] = [];
                            acc[slot.date].push(slot);
                          }
                          return acc;
                        }, {})
                    ).map(([date, slots]) => (
                      <OptGroup
                        key={date}
                        label={new Date(date).toLocaleDateString("vi-VN")}
                      >
                        {slots.map((slot) => (
                          <Option
                            key={`${date}|${slot.shift}`}
                            value={`${date}|${slot.shift}`}
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
                  rows={3}
                  placeholder="Lý Do Khám"
                  value={reasonForVisit}
                  onChange={(e) => setReasonForVisit(e.target.value)}
                  style={styles.textArea}
                />
              </div>
              <div style={styles.formGroup}>
                <Input.TextArea
                  rows={3}
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
                Xác Nhận Đặt Lịch
              </Button>
            </form>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f9",
    padding: "30px",
    marginTop: "64px",
  },
  wrapper: {
    display: "flex",
    gap: "20px",
    maxWidth: "1200px",
    width: "100%",
  },
  doctorInfoContainer: {
    flex: 0.4,
    backgroundColor: "#e6f7ff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  formContainer: {
    flex: 0.6,
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontWeight: "600",
    color: "#333",
  },
  formGroup: {
    display: "flex",
    gap: "20px",
    marginBottom: "15px",
  },
  inputBold: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #dcdcdc",
    fontWeight: "bold",
  },
  selectStyled: {
    width: "100%",
    borderRadius: "8px",
  },
  textArea: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #dcdcdc",
  },
  submitButton: {
    display: "block",
    margin: "20px auto 0",
    width: "200px",
    height: "45px",
    fontSize: "16px",
    backgroundColor: "#009eff",
    color: "#fff",
    borderRadius: "8px",
    fontWeight: "bold",
    textAlign: "center",
  },
  doctorImage: {
    width: "250px", // Chiều rộng ảnh nhỏ hơn
    height: "250px", // Chiều cao ảnh nhỏ hơn
    borderRadius: "50%", // Bo tròn ảnh
    objectFit: "cover", // Giữ tỷ lệ ảnh không bị méo
    margin: "10px auto", // Căn giữa ảnh trong container
    display: "block", // Đảm bảo ảnh hiển thị là block
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Đổ bóng nhẹ cho ảnh
  },
  doctorInfoContainer: {
    flex: 0.4,
    backgroundColor: "#e6f7ff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center", // Căn giữa nội dung trong container
  },
};

export default BookAppointment;
