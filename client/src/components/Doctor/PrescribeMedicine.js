import React, { useState, useEffect } from "react";
import {
  Table,
  Modal,
  Input,
  message,
  Button,
  Space,
  Select,
  Spin,
  Form,
  Row,
  Col,
  Typography,
  Card,
} from "antd";
import dayjs from "dayjs";
import {
  useGetDoctorMedicalRecordsQuery,
  useUpdateMedicalRecordMutation,
} from "../../Redux/Doctor/api";
import { useGetMedicinesQuery } from "../../Redux/Medicine/api";
import 'bootstrap/dist/css/bootstrap.css';


const { Option } = Select;
const { Title } = Typography;

const PrescribeMedicine = () => {
  const { data, isLoading, error, refetch } = useGetDoctorMedicalRecordsQuery();
  const [updateMedicalRecord] = useUpdateMedicalRecordMutation();
  const { data: medicinesData, isLoading: loadingMedicines } =
    useGetMedicinesQuery();

  const [recordsList, setRecordsList] = useState([]);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [formValues, setFormValues] = useState({
    prescribedMedicines: [],
  });
  const [paymentLink, setPaymentLink] = useState("");

  useEffect(() => {
    if (error) {
      message.error("Failed to load medical records.");
    }
  }, [error]);

  useEffect(() => {
    if (data?.medicalRecords) {
      setRecordsList(data.medicalRecords);
    }
  }, [data]);

  const handleEditClick = (record) => {
    setSelectedRecord(record._id);
    setFormValues({
      prescribedMedicines: record.prescribedMedicines
        ? record.prescribedMedicines.map((item) => ({
          medicine: item.medicine._id,
          quantity: item.quantity,
          total: item.total,
        }))
        : [],
    });
    setPaymentLink(""); // Reset the payment link on new edit
    setEditModalVisible(true);
  };

  const handleMedicineChange = (index, field, value) => {
    const updatedMedicines = [...formValues.prescribedMedicines];

    updatedMedicines[index] = {
      ...updatedMedicines[index],
      [field]: field === "quantity" ? parseInt(value, 10) : value,
    };

    if (field === "quantity" || field === "medicine") {
      const selectedMedicine = medicinesData?.data.find(
        (med) => med._id === updatedMedicines[index].medicine
      );
      if (selectedMedicine) {
        updatedMedicines[index].total =
          selectedMedicine.price * updatedMedicines[index].quantity;
      }
    }

    setFormValues({ prescribedMedicines: updatedMedicines });
  };

  const handleAddMedicine = () => {
    setFormValues((prev) => ({
      prescribedMedicines: [
        ...prev.prescribedMedicines,
        { medicine: "", quantity: 1, total: 0 },
      ],
    }));
  };

  const handleRemoveMedicine = (index) => {
    const updatedMedicines = [...formValues.prescribedMedicines];
    updatedMedicines.splice(index, 1);
    setFormValues({ prescribedMedicines: updatedMedicines });
  };

  const handleUpdate = async () => {
    if (formValues.prescribedMedicines.length === 0) {
      message.error("Vui lòng thêm ít nhất một loại thuốc");
      return;
    }

    const transformedPrescribedMedicines = formValues.prescribedMedicines.map(
      (item) => {
        const selectedMedicine = medicinesData?.data.find(
          (med) => med._id === item.medicine
        );
        if (!selectedMedicine) {
          message.error("Thuốc không hợp lệ");
          throw new Error("Thuốc không hợp lệ");
        }
        return {
          medicine: item.medicine,
          quantity: item.quantity,
          total: item.total,
        };
      }
    );

    try {
      const response = await updateMedicalRecord({
        recordId: selectedRecord,
        prescribedMedicines: transformedPrescribedMedicines,
      }).unwrap();

      setRecordsList((prevList) =>
        prevList.map((item) =>
          item._id === response.medicalRecord._id
            ? response.medicalRecord
            : item
        )
      );

      if (response.medicalRecord.paymentLink) {
        setPaymentLink(response.medicalRecord.paymentLink);
        message.success(
          "Cập nhật hồ sơ bệnh án thành công. Đã tạo liên kết thanh toán."
        );
      } else {
        message.success("Cập nhật hồ sơ bệnh án thành công.");
      }

      setEditModalVisible(false);
      refetch();
    } catch (error) {
      console.error("Lỗi khi cập nhật hồ sơ bệnh án:", error);
      message.error("Cập nhật hồ sơ bệnh án thất bại");
    }
  };

  const columns = [
    {
      title: "Tên bệnh nhân",
      dataIndex: ["patient", "fullName"],
      key: "patientName",
    },
    {
      title: "Ngày sinh",
      dataIndex: ["patient", "dateOfBirth"],
      key: "dateOfBirth",
      render: (date) => dayjs(date).format("DD/MM/YYYY"),
    },
    {
      title: "Giới tính",
      dataIndex: ["patient", "gender"],
      key: "gender",
    },
    {
      title: "Ngày hẹn",
      dataIndex: ["appointment", "date"],
      key: "appointmentDate",
      render: (date) => dayjs(date).format("DD/MM/YYYY"),
    },
    {
      title: "Ca khám",
      dataIndex: ["appointment", "shift"],
      key: "shift",
      render: (shift) => {
        if (shift === "morning") return "Buổi sáng";
        if (shift === "afternoon") return "Buổi trưa";
        if (shift === "evening") return "Buổi tối";
        return shift;
      },
    },
    {
      title: "Đơn thuốc",
      dataIndex: "prescribedMedicines",
      key: "prescribedMedicines",
      render: (medicines) =>
        Array.isArray(medicines) && medicines.length > 0 ? (
          <ul>
            {medicines.map((med) => (
              <li key={med.medicine._id}>
                {med.medicine.name} - {med.quantity} pcs
              </li>
            ))}
          </ul>
        ) : (
          "Chưa kê đơn"
        ),
    },
    {
      title: "Thao tác",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEditClick(record)}>
            Kê Toa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Title level={2}>Kê đơn thuốc</Title>
      <Card>
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Spin size="large" />
          </div>
        ) : (
          <Table
            dataSource={recordsList}
            columns={columns}
            rowKey={(record) => record._id}
            pagination={{ pageSize: 10 }}
          />
        )}
      </Card>

      <Modal
        title="Chỉnh sửa đơn thuốc"
        visible={editModalVisible}
        onOk={handleUpdate}
        onCancel={() => setEditModalVisible(false)}
        width={800}
      >
        {loadingMedicines ? (
          <Spin size="large" />
        ) : (
          <>
            <Form layout="vertical">
              {formValues.prescribedMedicines.map((medicine, index) => (
                <Row
                  gutter={16}
                  key={index}
                >
                  <Col span={10}>
                    <Form.Item label="Thuốc" required>
                      <Select
                        placeholder="Chọn thuốc"
                        value={medicine.medicine}
                        onChange={(value) =>
                          handleMedicineChange(index, "medicine", value)
                        }
                      >
                        {medicinesData?.data.map((med) => (
                          <Option
                            key={med._id}
                            value={med._id}
                          >
                            {med.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Số lượng" required>
                      <Input
                        placeholder="Số lượng"
                        type="number"
                        min={1}
                        value={medicine.quantity}
                        onChange={(e) =>
                          handleMedicineChange(
                            index,
                            "quantity",
                            e.target.value
                          )
                        }
                      />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Tổng tiền">
                      <Input
                        placeholder="Tổng tiền"
                        type="number"
                        value={medicine.total}
                        readOnly
                      />
                    </Form.Item>
                  </Col>
                  <Col span={2}>
                    <Button
                      className="btn btn-outline-danger"
                      type="danger"
                      icon="Xóa"
                      onClick={() => handleRemoveMedicine(index)}
                      style={{ 
                        marginTop: "30px", 
                        width: "100%", 
                        paddingTop: "3px",
                      }}
                    />
                  </Col>
                </Row>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={handleAddMedicine}
                  style={{ width: "100%" }}
                >
                  Thêm thuốc
                </Button>
              </Form.Item>
            </Form>
            {paymentLink && (
              <div style={{ marginTop: "20px" }}>
                <a
                  href={paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue" }}
                >
                  Mở liên kết thanh toán
                </a>
              </div>
            )}
          </>
        )}
      </Modal>
    </div>
  );
};

export default PrescribeMedicine;
