
import React, { useEffect, useState } from "react";
import { Table, Button, Modal, message, Space } from "antd";
import dayjs from "dayjs";
import {
  useGetDoctorAppointmentsQuery,
  useCancelAppointmentMutation,
  useUpdateAppointmentStatusMutation,
} from "../../Redux/Doctor/api";
import ChatBox from "../Chat/ChatBox"; // Đường dẫn đến ChatBox

const ManageAppointment = () => {
  const { data, isLoading } = useGetDoctorAppointmentsQuery();
  const [cancelAppointment] = useCancelAppointmentMutation();
  const [updateAppointmentStatus] = useUpdateAppointmentStatusMutation();

  const [appointmentsList, setAppointmentsList] = useState([]);
  const [isChatVisible, setIsChatVisible] = useState(false); // Trạng thái hiển thị hộp thoại chat
  const [selectedAppointment, setSelectedAppointment] = useState(null); // Cuộc hẹn đã chọn để mở chat

  useEffect(() => {
    if (data?.appointments) setAppointmentsList(data.appointments);
  }, [data]);

  const handleOpenChat = (appointment) => {
    setSelectedAppointment(appointment); // Lưu cuộc hẹn đã chọn
    setIsChatVisible(true); // Hiển thị hộp thoại chat
  };
  const handleCancelAppointment = async (appointmentId, status) => {
    if (status !== "pending") {
      message.error("Chỉ có thể hủy các cuộc hẹn ở trạng thái đang chờ xử lý.");
      return;
    }

    try {
      await cancelAppointment({ appointmentId }).unwrap();
      message.success("Lịch hẹn đã bị hủy thành công");
      setAppointmentsList((prev) =>
        prev.filter((appointment) => appointment._id !== appointmentId)
      );
    } catch (error) {
      message.error("Không thể hủy lịch hẹn");
    }
  };

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      await updateAppointmentStatus({ appointmentId, status }).unwrap();
      message.success("Trạng thái đã được cập nhật thành công");
      setAppointmentsList((prev) =>
        prev.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
    } catch (error) {
      message.error("Đã xảy ra lỗi khi cập nhật trạng thái");
    }
  };

  const columns = [
    {
      title: "Họ và tên",
      dataIndex: ["patient", "fullName"],
      key: "patientName",
    },
    {
      title: "Ngày hẹn",
      dataIndex: "date",
      key: "date",
      render: (date) => dayjs(date).format("DD/MM/YYYY"),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => handleUpdateStatus(record._id, "Completed")}
          >
            Xác nhận
          </Button>
          <Button
            type="primary"
            onClick={() => handleCancelAppointment(record._id, record.status)}
          >
            Hủy lịch
          </Button>
          <Button
            type="default"
            onClick={() => handleOpenChat(record)} // Mở hộp thoại chat
          >
            Mở Chat
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Lịch Hẹn Với Bệnh Nhân</h2>
      <Table
        dataSource={appointmentsList}
        columns={columns}
        loading={isLoading}
        rowKey={(record) => record._id}
        pagination={{ pageSize: 10 }}
        className="bg-white shadow-lg rounded-lg"
      />
      {/* Hộp thoại chat */}
      <Modal
        title="Hộp Thoại Chat"
        visible={isChatVisible}
        onCancel={() => setIsChatVisible(false)}
        footer={null}
        width={700}
      >
        {selectedAppointment && (
          <ChatBox
            chatId={selectedAppointment._id}
            doctorId={selectedAppointment.doctor}
            patientId={selectedAppointment.patient}
          />
        )}
      </Modal>
    </div>
  );
};

export default ManageAppointment;