import React, { useState, useEffect } from "react";
import { Table, Modal, Input, message, Button, Space, Spin } from "antd";
import dayjs from "dayjs"; // Import dayjs for date formatting
import {
  useGetDoctorMedicalRecordsQuery,
  useUpdateMedicalRecordMutation,
} from "../../Redux/Doctor/api";

const MedicalRecordDoctor = () => {
  const { data, isLoading, error } = useGetDoctorMedicalRecordsQuery();
  const [updateMedicalRecord] = useUpdateMedicalRecordMutation();
  const [appointmentsList, setAppointmentsList] = useState([]); // Quản lý danh sách hồ sơ bệnh án
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [formValues, setFormValues] = useState({
    diagnosis: "",
    treatment: "",
    notes: "",
  });

  // Xử lý khi có lỗi trong API
  useEffect(() => {
    if (error) {
      message.error("Failed to load medical records.");
    }
  }, [error]);

  // Khi có dữ liệu từ API, cập nhật vào state
  useEffect(() => {
    if (data?.medicalRecords) {
      setAppointmentsList(data.medicalRecords);
    }
  }, [data]);

  // Xử lý khi nhấn nút "Edit"
  const handleEditClick = (record) => {
    setSelectedRecord(record._id); // Lưu lại ID hồ sơ bệnh án cần cập nhật
    setFormValues({
      diagnosis: record.diagnosis || "",
      treatment: record.treatment || "",
      notes: record.notes || "",
    });
    setEditModalVisible(true); // Mở modal cập nhật
  };

  // Xử lý thay đổi form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Gọi API để cập nhật hồ sơ bệnh án
  const handleUpdate = async () => {
    if (!formValues.diagnosis && !formValues.treatment && !formValues.notes) {
      message.error("Please fill at least one field.");
      return;
    }

    try {
      // Truyền đúng dữ liệu cập nhật vào API
      const response = await updateMedicalRecord({
        recordId: selectedRecord,
        updatedRecord: formValues,
      }).unwrap();

      console.log("Updated medical record:", response); // Kiểm tra dữ liệu trả về từ API

      // Cập nhật danh sách với dữ liệu mới được cập nhật
      setAppointmentsList((prevList) =>
        prevList.map((item) =>
          item._id === response.medicalRecord._id
            ? response.medicalRecord
            : item
        )
      );

      message.success("Medical record updated successfully");
      setEditModalVisible(false); // Đóng modal
    } catch (error) {
      message.error("Failed to update medical record");
    }
  };

  // Cấu trúc bảng
  const columns = [
    {
      title: "Patient Name",
      dataIndex: ["patient", "fullName"],
      key: "patientName",
    },
    {
      title: "Date of Birth",
      dataIndex: ["patient", "dateOfBirth"],
      key: "dateOfBirth",
      render: (date) => dayjs(date).format("DD/MM/YYYY"), // Format date of birth as DD/MM/YYYY
    },
    {
      title: "Gender",
      dataIndex: ["patient", "gender"],
      key: "gender",
    },
    {
      title: "Appointment Date",
      dataIndex: ["appointment", "date"],
      key: "appointmentDate",
      render: (date) => dayjs(date).format("DD/MM/YYYY"), // Format appointment date as DD/MM/YYYY
    },
    {
      title: "Shift",
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
      title: "Diagnosis",
      dataIndex: "diagnosis",
      key: "diagnosis",
    },
    {
      title: "Treatment",
      dataIndex: "treatment",
      key: "treatment",
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEditClick(record)}>
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Medical Records</h2>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spin size="large" />
        </div>
      ) : (
        <Table
          dataSource={appointmentsList} // Dùng dữ liệu từ state
          columns={columns}
          rowKey={(record) => record._id}
          pagination={{ pageSize: 5 }}
          className="bg-white shadow-lg rounded-lg"
        />
      )}

      {/* Modal for Editing Medical Record */}
      <Modal
        title="Edit Medical Record"
        visible={editModalVisible}
        onOk={handleUpdate}
        onCancel={() => setEditModalVisible(false)}
      >
        <div className="space-y-4">
          <Input
            placeholder="Diagnosis"
            name="diagnosis"
            value={formValues.diagnosis}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Treatment"
            name="treatment"
            value={formValues.treatment}
            onChange={handleInputChange}
          />
          <Input.TextArea
            placeholder="Notes"
            name="notes"
            value={formValues.notes}
            onChange={handleInputChange}
          />
        </div>
      </Modal>
    </div>
  );
};

export default MedicalRecordDoctor;
