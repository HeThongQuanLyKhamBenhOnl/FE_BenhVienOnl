import React, { useEffect, useState } from "react";
import { Table, Button, message, Space, Tabs, Input } from "antd";
import dayjs from "dayjs";
import {
  useGetDoctorAppointmentsQuery,
  useCancelAppointmentMutation,
  useUpdateAppointmentStatusMutation,
} from "../../Redux/Doctor/api";

const { Search } = Input;
const { TabPane } = Tabs;

const ManageAppointment = () => {
  const { data, isLoading } = useGetDoctorAppointmentsQuery();
  const [cancelAppointment] = useCancelAppointmentMutation();
  const [updateAppointmentStatus] = useUpdateAppointmentStatusMutation();

  const [appointmentsList, setAppointmentsList] = useState([]);
  const [filteredPending, setFilteredPending] = useState([]);
  const [filteredCompleted, setFilteredCompleted] = useState([]);

  useEffect(() => {
    if (data?.appointments) {
      const reversedAppointments = [...data.appointments].reverse();
      setAppointmentsList(reversedAppointments);
      filterAppointments(reversedAppointments);
    }
  }, [data]);

  const filterAppointments = (appointments) => {
    setFilteredPending(
      appointments.filter((appointment) => appointment.status === "pending")
    );
    setFilteredCompleted(
      appointments.filter((appointment) => appointment.status === "Completed")
    );
  };

  const handleCancelAppointment = async (appointmentId, status) => {
    if (status !== "pending") {
      message.error("Chỉ có thể hủy các cuộc hẹn ở trạng thái đang chờ xử lý.");
      return;
    }

    try {
      await cancelAppointment({ appointmentId }).unwrap();
      message.success("Lịch hẹn đã bị hủy thành công");
      const updatedAppointments = appointmentsList.filter(
        (appointment) => appointment._id !== appointmentId
      );
      setAppointmentsList(updatedAppointments);
      filterAppointments(updatedAppointments);
    } catch (error) {
      message.error("Không thể hủy lịch hẹn");
    }
  };

  const handleUpdateStatus = async (appointmentId) => {
    try {
      await updateAppointmentStatus({
        appointmentId,
        status: "Completed",
      }).unwrap();
      message.success("Trạng thái đã được cập nhật thành công");
      const updatedAppointments = appointmentsList.map((appointment) =>
        appointment._id === appointmentId
          ? { ...appointment, status: "Completed" }
          : appointment
      );
      setAppointmentsList(updatedAppointments);
      filterAppointments(updatedAppointments);
    } catch (error) {
      message.error("Đã xảy ra lỗi khi cập nhật trạng thái");
    }
  };

  const handleSearch = (value, tabKey) => {
    const lowerCaseValue = value.toLowerCase();
    const appointments =
      tabKey === "pending" ? filteredPending : filteredCompleted;

    const filtered = appointments.filter((appointment) => {
      const name = appointment.patient.fullName.toLowerCase();
      const date = dayjs(appointment.date).format("DD/MM/YYYY");
      return name.includes(lowerCaseValue) || date.includes(lowerCaseValue);
    });

    if (tabKey === "pending") {
      setFilteredPending(filtered);
    } else {
      setFilteredCompleted(filtered);
    }
  };

  const columnsPending = [
    {
      title: "Họ và tên",
      dataIndex: ["patient", "fullName"],
      key: "patientName",
    },
    {
      title: "Giới tính",
      dataIndex: ["patient", "gender"],
      key: "gender",
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
      render: (status) =>
        status === "pending"
          ? "Đang chờ"
          : status === "Completed"
          ? "Xác nhận"
          : status,
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleUpdateStatus(record._id)}>
            Xác nhận
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => handleCancelAppointment(record._id, record.status)}
          >
            Hủy lịch
          </Button>
        </Space>
      ),
    },
  ];

  const columnsCompleted = [
    {
      title: "Họ và tên",
      dataIndex: ["patient", "fullName"],
      key: "patientName",
    },
    {
      title: "Giới tính",
      dataIndex: ["patient", "gender"],
      key: "gender",
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
      render: (status) =>
        status === "pending"
          ? "Đang chờ"
          : status === "Completed"
          ? "Xác nhận"
          : status,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Lịch Hẹn Với Bệnh Nhân</h2>

      <Tabs defaultActiveKey="pending">
        {/* Tab Pending Appointments */}
        <TabPane tab="Lịch hẹn đang chờ" key="pending">
          <div className="mb-4">
            <Search
              placeholder="Tìm kiếm theo tên hoặc ngày (DD/MM/YYYY)"
              onSearch={(value) => handleSearch(value, "pending")}
              enterButton
              style={{ width: "400px" }}
            />
          </div>
          <Table
            dataSource={filteredPending}
            columns={columnsPending}
            loading={isLoading}
            rowKey={(record) => record._id}
            pagination={{ pageSize: 10 }}
            className="bg-white shadow-lg rounded-lg"
          />
        </TabPane>

        {/* Tab Completed Appointments */}
        <TabPane tab="Lịch hẹn đã hoàn thành" key="completed">
          <div className="mb-4">
            <Search
              placeholder="Tìm kiếm theo tên hoặc ngày (DD/MM/YYYY)"
              onSearch={(value) => handleSearch(value, "completed")}
              enterButton
              style={{ width: "400px" }}
            />
          </div>
          <Table
            dataSource={filteredCompleted}
            columns={columnsCompleted}
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
