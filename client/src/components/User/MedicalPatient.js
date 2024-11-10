import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpdatedMedicalRecords } from "../../Redux/User/userSlice";
import { Card, Typography, List, Divider, Spin, Row, Col, Avatar } from "antd";
import { UserOutlined, MedicineBoxOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const MedicalPatient = () => {
  const dispatch = useDispatch();

  // Retrieve data from Redux store
  const { updatedMedicalRecords, loading, error } = useSelector((state) => ({
    updatedMedicalRecords: state.user.updatedMedicalRecords,
    loading: state.user.loading,
    error: state.user.error,
  }));

  // Fetch updated medical records when the component mounts
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
          <Card
            style={{ marginBottom: "20px" }}
            key={record._id}
            hoverable
            bordered
          >
            <Row gutter={16} justify="center" align="middle">
              <Col span={24}>
                <Row justify="center" align="middle">
                  <Col>
                    <Avatar
                      size={64}
                      icon={<UserOutlined />}
                      style={{ backgroundColor: "#87d068" }}
                    />
                  </Col>
                  <Col style={{ textAlign: "center", marginLeft: 12 }}>
                    <Title level={4} style={{ margin: 0 }}>
                      Bác sĩ:{" "}
                      {record.doctor
                        ? record.doctor.fullName
                        : "Không xác định"}
                    </Title>
                    <Text type="secondary">
                      Ngày hẹn:{" "}
                      {record.appointment
                        ? new Date(record.appointment.date).toLocaleDateString()
                        : "Không có ngày hẹn"}
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Divider style={{ margin: "16px 0" }} />
              <Col xs={24} md={12}>
                <Text strong>Chẩn đoán:</Text>
                <Paragraph>{record.diagnosis || "Chưa cập nhật"}</Paragraph>
                <Text strong>Điều trị:</Text>
                <Paragraph>{record.treatment || "Chưa cập nhật"}</Paragraph>
                <Text strong>Ghi chú:</Text>
                <Paragraph>{record.notes || "Chưa cập nhật"}</Paragraph>
              </Col>
              <Col xs={24} md={12}>
                {record.prescribedMedicines &&
                  record.prescribedMedicines.length > 0 && (
                    <>
                      <Title level={4}>
                        <MedicineBoxOutlined /> Toa thuốc
                      </Title>
                      <List
                        dataSource={record.prescribedMedicines}
                        renderItem={(item) => (
                          <List.Item>
                            <Text>
                              {item.medicine.name}: {item.quantity}{" "}
                              {item.unit || "pcs"}
                            </Text>
                          </List.Item>
                        )}
                      />
                    </>
                  )}
              </Col>
            </Row>
          </Card>
        )}
      />
    </div>
  );
};

export default MedicalPatient;
