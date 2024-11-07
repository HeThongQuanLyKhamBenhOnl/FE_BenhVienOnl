import React, { useState, useEffect } from "react";
import {
  Form,
  DatePicker,
  Select,
  Button,
  notification,
  Card,
  Typography,
  List,
  Modal,
} from "antd";
import {
  useCreateScheduleMutation,
  useGetDoctorScheduleQuery,
  useUpdateDoctorScheduleMutation,
} from "../../Redux/Doctor/api";
import moment from "moment";

const { Title, Text } = Typography;
const { Option } = Select;

const ManageSchedule = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [loading, setLoading] = useState(false);

  const { data: scheduleData, refetch } = useGetDoctorScheduleQuery();
  const [createSchedule] = useCreateScheduleMutation();
  const [updateDoctorSchedule] = useUpdateDoctorScheduleMutation();

  const handleCreate = async (values) => {
    const { date, shift } = values;

    const scheduleData = {
      date: date.format("YYYY-MM-DD"),
      shift,
    };

    setLoading(true);
    try {
      const response = await createSchedule(scheduleData).unwrap();
      notification.success({
        message: "Thành công",
        description: response.message,
      });
      form.resetFields();
      refetch();
    } catch (error) {
      notification.error({
        message: "Lỗi",
        description:
          error?.data?.message || "Đã xảy ra lỗi khi tạo lịch làm việc.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (values) => {
    const { date, shift } = values;
    const updatedSchedule = {
      scheduleId: selectedSchedule._id,
      date: date.format("YYYY-MM-DD"),
      shift,
    };

    try {
      const response = await updateDoctorSchedule(updatedSchedule).unwrap();
      notification.success({
        message: "Cập nhật thành công",
        description: response.message,
      });
      setIsModalOpen(false);
      setSelectedSchedule(null);
      refetch();
    } catch (error) {
      notification.error({
        message: "Lỗi",
        description:
          error?.data?.message || "Đã xảy ra lỗi khi cập nhật lịch làm việc.",
      });
    }
  };

  const openUpdateModal = (schedule) => {
    setSelectedSchedule(schedule);
    form.setFieldsValue({
      date: moment(schedule.date),
      shift: schedule.shift,
    });
    setIsModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsModalOpen(false);
    setSelectedSchedule(null);
    form.resetFields();
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <Title level={3} style={styles.title}>
          Quản lý Lịch làm việc
        </Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={selectedSchedule ? handleUpdate : handleCreate}
          style={styles.form}
        >
          <Form.Item
            name="date"
            label="Chọn ngày làm việc"
            rules={[
              { required: true, message: "Vui lòng chọn ngày làm việc!" },
            ]}
          >
            <DatePicker
              style={styles.datePicker}
              format="YYYY-MM-DD"
              disabledDate={(current) =>
                current && current < moment().endOf("day")
              }
            />
          </Form.Item>

          <Form.Item
            name="shift"
            label="Chọn ca làm việc"
            rules={[{ required: true, message: "Vui lòng chọn ca làm việc!" }]}
          >
            <Select placeholder="Chọn ca làm việc" style={styles.select}>
              <Option value="morning">Buổi sáng</Option>
              <Option value="afternoon">Buổi trưa</Option>
              <Option value="evening">Buổi tối</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={styles.button}
              loading={loading}
            >
              {selectedSchedule
                ? "Cập nhật Lịch làm việc"
                : "Tạo Lịch làm việc"}
            </Button>
          </Form.Item>
        </Form>

        <Title level={4} style={styles.title}>
          Lịch làm việc hiện tại
        </Title>
        <List
          itemLayout="horizontal"
          dataSource={scheduleData?.schedule}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button type="link" onClick={() => openUpdateModal(item)}>
                  Cập nhật
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={
                  <Text>
                    Ngày: {moment(item.date).format("YYYY-MM-DD")} | Ca:{" "}
                    {item.shift === "morning"
                      ? "Buổi sáng"
                      : item.shift === "afternoon"
                      ? "Buổi trưa"
                      : "Buổi tối"}
                  </Text>
                }
              />
            </List.Item>
          )}
        />

        {/* Modal for updating schedule */}
        <Modal
          title="Cập nhật Lịch làm việc"
          visible={isModalOpen}
          onCancel={closeUpdateModal}
          onOk={() => form.submit()}
        >
          <Form form={form} layout="vertical" onFinish={handleUpdate}>
            <Form.Item
              name="date"
              label="Ngày làm việc"
              rules={[
                { required: true, message: "Vui lòng chọn ngày làm việc!" },
              ]}
            >
              <DatePicker style={styles.datePicker} format="YYYY-MM-DD" />
            </Form.Item>
            <Form.Item
              name="shift"
              label="Ca làm việc"
              rules={[
                { required: true, message: "Vui lòng chọn ca làm việc!" },
              ]}
            >
              <Select placeholder="Chọn ca làm việc" style={styles.select}>
                <Option value="morning">Buổi sáng</Option>
                <Option value="afternoon">Buổi trưa</Option>
                <Option value="evening">Buổi tối</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    </div>
  );
};

// Styles CSS-in-JS
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
    padding: "20px",
  },
  card: {
    maxWidth: "600px",
    width: "100%",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
  title: {
    textAlign: "center",
    color: "#333",
  },
  form: {
    width: "100%",
  },
  datePicker: {
    width: "100%",
  },
  select: {
    width: "100%",
  },
  button: {
    width: "100%",
    backgroundColor: "#1890ff",
    borderColor: "#1890ff",
  },
};

export default ManageSchedule;
