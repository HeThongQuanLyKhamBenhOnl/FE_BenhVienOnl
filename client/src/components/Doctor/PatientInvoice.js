import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUpdatedMedicalRecords } from "../../Redux/User/userSlice";
import {
  Card,
  Typography,
  List,
  Divider,
  Spin,
  Row,
  Col,
  Avatar,
  Tag,
} from "antd";
import { MedicineBoxOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const PatientInvoice = () => {
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
      <Title level={2}>Hóa đơn bệnh nhân</Title>
      {loading && <Spin tip="Đang tải dữ liệu..." />}
      {error && <Text type="danger">{error}</Text>}
      <List
        dataSource={updatedMedicalRecords}
        renderItem={(record) =>
          record.prescribedMedicines &&
          record.prescribedMedicines.length > 0 && (
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
                        icon={<MedicineBoxOutlined />}
                        style={{ backgroundColor: "#52c41a" }}
                      />
                    </Col>
                    <Col style={{ textAlign: "center", marginLeft: 12 }}>
                      <Title level={4} style={{ margin: 0 }}>
                        Tên bệnh nhân:{" "}
                        {record.patient
                          ? record.patient.fullName
                          : "Không xác định"}
                      </Title>
                      <Text type="secondary">
                        Ngày kê đơn:{" "}
                        {record.appointment
                          ? new Date(
                              record.appointment.date
                            ).toLocaleDateString()
                          : "Không có ngày hẹn"}
                      </Text>
                    </Col>
                  </Row>
                </Col>
                <Divider style={{ margin: "16px 0" }} />
                <Col xs={24}>
                  <List
                    dataSource={record.prescribedMedicines}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          title={<Text strong>{item.medicine.name}</Text>}
                          description={
                            <>
                              <Text>
                                Số lượng: {item.quantity} {item.unit || "pcs"}
                              </Text>
                              <br />
                              <Text>
                                Tổng tiền:{" "}
                                {item.total
                                  ? item.total.toLocaleString("vi-VN")
                                  : 0}{" "}
                                VND
                              </Text>
                            </>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </Col>
                <Divider style={{ margin: "16px 0" }} />
                <Col xs={24} style={{ textAlign: "center" }}>
                  <Text strong>Trạng thái thanh toán: </Text>
                  <Tag
                    color={
                      record.paymentStatus === "Paid"
                        ? "green"
                        : record.paymentStatus === "Pending"
                        ? "orange"
                        : "red"
                    }
                  >
                    {record.paymentStatus}
                  </Tag>
                  {record.paymentLink && (
                    <a
                      href={record.paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginLeft: "12px" }}
                    >
                      <Tag color="blue">Thanh toán ngay</Tag>
                    </a>
                  )}
                </Col>
              </Row>
            </Card>
          )
        }
      />
    </div>
  );
};

export default PatientInvoice;
