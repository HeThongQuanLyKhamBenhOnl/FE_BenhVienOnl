import React, { useEffect, useState } from "react";
import { Table, Button, Modal, message, Space } from "antd";
import dayjs from "dayjs"; // Import dayjs for date formatting
import {
  useGetDoctorAppointmentsQuery,
  useCancelAppointmentMutation,
  useRescheduleAppointmentMutation,
  useUpdateAppointmentStatusMutation,
} from "../../Redux/Doctor/api";

const ManageAppointment = () => {
  const { data, isLoading } = useGetDoctorAppointmentsQuery();
  const [cancelAppointment] = useCancelAppointmentMutation();
  const [rescheduleAppointment] = useRescheduleAppointmentMutation();
  const [updateAppointmentStatus] = useUpdateAppointmentStatusMutation();

  const [appointmentsList, setAppointmentsList] = useState([]);
  const [rescheduleModalVisible, setRescheduleModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [newDate, setNewDate] = useState("");

  useEffect(() => {
    if (data?.appointments) setAppointmentsList(data.appointments);
  }, [data]);

  const handleCancelAppointment = async (appointmentId) => {
    try {
      await cancelAppointment(appointmentId).unwrap();
      message.success("Appointment cancelled successfully");
      setAppointmentsList((prev) =>
        prev.filter((appointment) => appointment._id !== appointmentId)
      );
    } catch (error) {
      message.error("Failed to cancel appointment");
    }
  };

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      await updateAppointmentStatus({ appointmentId, status }).unwrap();
      message.success("Status updated successfully");
      setAppointmentsList((prev) =>
        prev.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
    } catch (error) {
      message.error("Failed to update status");
    }
  };

  const handleReschedule = async () => {
    if (!newDate) {
      message.warning("Please select a new date for rescheduling.");
      return;
    }
    try {
      await rescheduleAppointment({
        appointmentId: selectedAppointment,
        newDate,
      }).unwrap();
      message.success("Appointment rescheduled successfully");
      setAppointmentsList((prev) =>
        prev.map((appointment) =>
          appointment._id === selectedAppointment
            ? { ...appointment, date: newDate }
            : appointment
        )
      );
      setRescheduleModalVisible(false);
      setNewDate("");
    } catch (error) {
      message.error("Failed to reschedule appointment");
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
      render: (date) => dayjs(date).format("DD/MM/YYYY"), // Format date as DD/MM/YYYY
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
            type="danger"
            onClick={() => handleCancelAppointment(record._id)}
          >
            Hủy lịch
          </Button>
          <Button
            type="default"
            onClick={() => {
              setSelectedAppointment(record._id);
              setRescheduleModalVisible(true);
            }}
          >
            Dời lịch hẹn
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    if (appointmentsList.length === 0 && !isLoading) {
      // You can add any specific logic here when the appointments list is empty
    }
  }, [appointmentsList, isLoading]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Lịch Hẹn Với Bệnh Nhân</h2>
      <Table
        dataSource={appointmentsList}
        columns={columns}
        loading={isLoading}
        rowKey={(record) => record._id}
        pagination={{ pageSize: 5 }}
        className="bg-white shadow-lg rounded-lg"
      />

      {/* Modal for Rescheduling */}
      <Modal
        title="Reschedule Appointment"
        visible={rescheduleModalVisible}
        onOk={handleReschedule}
        onCancel={() => setRescheduleModalVisible(false)}
      >
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        />
      </Modal>
    </div>
  );
};

export default ManageAppointment;
