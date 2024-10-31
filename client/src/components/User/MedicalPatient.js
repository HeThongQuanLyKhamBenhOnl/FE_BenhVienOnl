import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpdatedMedicalRecords } from "../../Redux/User/userSlice"; // import getUpdatedMedicalRecords từ userSlice
import { Card, Typography, List, Divider, Spin } from "antd";

const { Title, Text } = Typography;

const MedicalPatient = () => {
  const dispatch = useDispatch();

  // Lấy dữ liệu từ Redux store
  const { updatedMedicalRecords, loading, error } = useSelector((state) => ({
    updatedMedicalRecords: state.user.updatedMedicalRecords,
    loading: state.user.loading,
    error: state.user.error,
  }));

  // Gọi API lấy hồ sơ bệnh án đã cập nhật khi component được render lần đầu
  useEffect(() => {
    dispatch(getUpdatedMedicalRecords());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Hồ sơ bệnh án đã được bác sĩ cập nhật</Title>
      {loading && <Spin tip="Đang tải dữ liệu..." />}
      {error && <Text type="danger">{error}</Text>}
      <List
        dataSource={updatedMedicalRecords}
        renderItem={(record) => (
          <Card style={{ marginBottom: "20px" }} key={record._id}>
            <Title level={4}>
              Bác sĩ:{" "}
              {record.doctor ? record.doctor.fullName : "Không xác định"}
            </Title>
            <Text strong>Ngày hẹn: </Text>
            <Text>
              {record.appointment
                ? new Date(record.appointment.date).toLocaleDateString()
                : "Không có ngày hẹn"}
            </Text>
            <Divider />
            <Text strong>Diagnosis:</Text>
            <p>{record.diagnosis || "Chưa cập nhật"}</p>
            <Text strong>Treatment:</Text>
            <p>{record.treatment || "Chưa cập nhật"}</p>
            <Text strong>Notes:</Text>
            <p>{record.notes || "Chưa cập nhật"}</p>
          </Card>
        )}
      />
    </div>
  );
};

export default MedicalPatient;
