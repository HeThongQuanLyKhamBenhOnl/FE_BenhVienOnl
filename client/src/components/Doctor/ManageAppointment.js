import React, { useEffect, useState } from "react";
import { Table, Button, message, Tabs, Space } from "antd";
import dayjs from "dayjs";
import {
  useGetDoctorAppointmentsQuery,
  useCancelAppointmentMutation,
  useUpdateAppointmentStatusMutation,
} from "../../Redux/Doctor/api";

const { TabPane } = Tabs;

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

  // Hàm chuyển đổi trạng thái thành tiếng Việt
  const renderStatus = (status) => {
    switch (status) {
      case "pending":
        return "Đang chờ xác nhận";
      case "Completed":
        return "Đã xác nhận";
      default:
        return status;
    }
  };

  // Cấu hình cột có cột "Hành động"
  const columnsWithActions = [
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
      render: (status) => renderStatus(status), // Chuyển đổi trạng thái
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
        </Space>
      ),
    },
  ];

  // Cấu hình cột không có cột "Hành động"
  const columnsWithoutActions = [
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
      render: (status) => renderStatus(status), // Chuyển đổi trạng thái
    },
  ];

  const pendingAppointments = appointmentsList.filter(
    (appointment) => appointment.status === "pending"
  );

  const completedAppointments = appointmentsList.filter(
    (appointment) => appointment.status === "Completed"
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Quản Lý Lịch Hẹn</h2>
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="Cuộc hẹn đang chờ xử lý" key="1">
          <Table
            dataSource={pendingAppointments}
            columns={columnsWithActions}
            loading={isLoading}
            rowKey={(record) => record._id}
            pagination={{ pageSize: 10 }}
            className="bg-white shadow-lg rounded-lg"
          />
        </TabPane>
        <TabPane tab="Cuộc hẹn đã hoàn thành" key="2">
          <Table
            dataSource={completedAppointments}
            columns={columnsWithoutActions}
            loading={isLoading}
            rowKey={(record) => record._id}
            pagination={{ pageSize: 10 }}
            className="bg-white shadow-lg rounded-lg"
          />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ManageAppointment;
