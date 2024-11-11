import React, { useEffect, useState } from "react";
import { Table, Button, Modal, message, Space } from "antd";
import dayjs from "dayjs"; // Import dayjs for date formatting
import {
  useGetDoctorAppointmentsQuery,
  useCancelAppointmentMutation,
  useUpdateAppointmentStatusMutation,
} from "../../Redux/Doctor/api";

const ManageAppointment = () => {
  const { data, isLoading } = useGetDoctorAppointmentsQuery();
  const [cancelAppointment] = useCancelAppointmentMutation();
  const [updateAppointmentStatus] = useUpdateAppointmentStatusMutation();

  const [appointmentsList, setAppointmentsList] = useState([]);

  useEffect(() => {
    if (data?.appointments) setAppointmentsList(data.appointments);
  }, [data]);

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
          {record.status !== "Completed" && (
            <Button
              type="primary"
              onClick={() => handleUpdateStatus(record._id, "Completed")}
            >
              Xác nhận
            </Button>
          )}
          <Button
            type="primary"
            onClick={() => handleCancelAppointment(record._id, record.status)}
          >
            Hủy lịch
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
        pagination={{ pageSize: 5 }}
        className="bg-white shadow-lg rounded-lg"
      />
    </div>
  );
};

export default ManageAppointment;
