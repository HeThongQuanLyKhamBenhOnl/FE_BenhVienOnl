import React, { useState, useEffect } from "react";
import { Table, Modal, Input, message, Button, Space, Spin } from "antd";
import dayjs from "dayjs"; // Import dayjs for date formatting
import {
  useGetDoctorMedicalRecordsQuery,
  useUpdateMedicalRecordMutation,
} from "../../Redux/Doctor/api";

const MedicalRecordDoctor = () => {
  const { data, isLoading, error, refetch } = useGetDoctorMedicalRecordsQuery();
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
      message.error("Vui lòng điền ít nhất một trường.");
      return;
    }

    try {
      // Truyền đúng dữ liệu cập nhật vào API
      const response = await updateMedicalRecord({
        recordId: selectedRecord,
        ...formValues, // Truyền toàn bộ `formValues` vào `body`
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

      message.success("Cập nhật hồ sơ bệnh án thành công");
      setEditModalVisible(false); // Đóng modal
      refetch();
    } catch (error) {
      message.error("Cập nhật hồ sơ bệnh án thất bại");
    }
  };

  // Cấu trúc bảng
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
      render: (date) => dayjs(date).format("DD/MM/YYYY"), // Format date of birth as DD/MM/YYYY
    },
    {
      title: "Giới tính",
      dataIndex: ["patient", "gender"],
      key: "gender",
    },
    {
      title: "Ngày đặt lịch hẹn",
      dataIndex: ["appointment", "date"],
      key: "appointmentDate",
      render: (date) => dayjs(date).format("DD/MM/YYYY"), // Format appointment date as DD/MM/YYYY
    },
    {
      title: "Ca làm việc",
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
      title: "Chẩn đoán",
      dataIndex: "diagnosis",
      key: "diagnosis",
    },
    {
      title: "Toa thuốc",
      dataIndex: "treatment",
      key: "treatment",
    },
    {
      title: "Chú thích",
      dataIndex: "notes",
      key: "notes",
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleEditClick(record)}>
            Chỉnh sửa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">HỒ SƠ BỆNH NHÂN</h2>
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
            placeholder="Chẩn đoán"
            name="diagnosis"
            value={formValues.diagnosis}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Toa thuốc"
            name="treatment"
            value={formValues.treatment}
            onChange={handleInputChange}
          />
          <Input.TextArea
            placeholder="Chú thích"
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
