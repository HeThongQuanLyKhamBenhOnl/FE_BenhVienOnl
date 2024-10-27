import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors, createDoctor } from "../../Redux/User/userSlice";
import {
  Table,
  Button,
  Space,
  Drawer,
  Form,
  Input,
  Select,
  DatePicker,
  message,
  InputNumber,
} from "antd";

const ManageDoctor = () => {
  const dispatch = useDispatch();

  const { doctors, loading, error } = useSelector((state) => state.user);

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);

  const handleCreateDoctor = () => {
    form.validateFields().then((values) => {
      const formattedValues = {
        ...values,
        dateOfBirth: values.dateOfBirth.format("YYYY-MM-DD"),
      };

      dispatch(createDoctor(formattedValues))
        .unwrap()
        .then(() => {
          message.success("Tạo bác sĩ thành công!");
          setIsDrawerVisible(false);
          form.resetFields();
          dispatch(getAllDoctors());
        })
        .catch(() => {
          message.error("Có lỗi xảy ra khi tạo bác sĩ.");
        });
    });
  };

  const columns = [
    {
      title: "Họ Tên",
      dataIndex: "fullName",
      key: "fullName",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 200,
    },
    {
      title: "Số Điện Thoại",
      dataIndex: "phone",
      key: "phone",
      width: 120,
    },
    {
      title: "Chuyên Khoa",
      dataIndex: "specialty",
      key: "specialty",
      width: 150,
    },
    {
      title: "Giới Tính",
      dataIndex: "gender",
      key: "gender",
      width: 100,
    },
    {
      title: "Ngày Sinh",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
      width: 120,
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: "Địa Chỉ",
      dataIndex: "address",
      key: "address",
      width: 150,
    },
    {
      title: "Kinh Nghiệm (năm)",
      dataIndex: "experience",
      key: "experience",
      width: 100,
    },
    {
      title: "Bằng Cấp",
      dataIndex: "qualifications",
      key: "qualifications",
      width: 200,
      render: (text) =>
        Array.isArray(text) ? text.join(", ") : "Không có bằng cấp", // Kiểm tra nếu là mảng, nếu không thì hiển thị giá trị mặc định    },
    },
    {
      title: "Hành Động",
      key: "action",
      width: 150,
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary">Sửa</Button>
          <Button type="primary" danger>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>Quản Lý Bác Sĩ</h1>
      <Button type="primary" onClick={() => setIsDrawerVisible(true)}>
        Tạo Bác Sĩ
      </Button>

      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : error ? (
        <p>Có lỗi xảy ra: {error}</p>
      ) : doctors && doctors.length === 0 ? (
        <p>Hiện tại không có bác sĩ nào. Bạn có thể tạo mới.</p>
      ) : (
        <Table
          columns={columns}
          dataSource={doctors}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
      )}

      <Drawer
        title="Tạo Bác Sĩ Mới"
        width={720}
        onClose={() => setIsDrawerVisible(false)}
        open={isDrawerVisible}
        footer={
          <div style={{ textAlign: "right" }}>
            <Button
              onClick={() => setIsDrawerVisible(false)}
              style={{ marginRight: 8 }}
            >
              Hủy
            </Button>
            <Button onClick={handleCreateDoctor} type="primary">
              Tạo
            </Button>
          </div>
        }
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="username"
            label="Tên đăng nhập"
            rules={[{ required: true, message: "Hãy nhập tên đăng nhập!" }]}
          >
            <Input placeholder="Nhập tên đăng nhập" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[{ required: true, message: "Hãy nhập mật khẩu!" }]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item
            name="fullName"
            label="Họ Tên"
            rules={[{ required: true, message: "Hãy nhập họ tên bác sĩ!" }]}
          >
            <Input placeholder="Nhập họ tên" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Hãy nhập email bác sĩ!" }]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Số Điện Thoại"
            rules={[{ required: true, message: "Hãy nhập số điện thoại!" }]}
          >
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Giới Tính"
            rules={[{ required: true, message: "Hãy chọn giới tính!" }]}
          >
            <Select placeholder="Chọn giới tính">
              <Select.Option value="Male">Nam</Select.Option>
              <Select.Option value="Female">Nữ</Select.Option>
              <Select.Option value="Other">Khác</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="dateOfBirth"
            label="Ngày Sinh"
            rules={[{ required: true, message: "Hãy nhập ngày sinh!" }]}
          >
            <DatePicker placeholder="Chọn ngày sinh" format="DD/MM/YYYY" />
          </Form.Item>

          <Form.Item
            name="address"
            label="Địa Chỉ"
            rules={[{ required: true, message: "Hãy nhập địa chỉ!" }]}
          >
            <Input placeholder="Nhập địa chỉ" />
          </Form.Item>

          <Form.Item
            name="specialization"
            label="Chuyên Khoa"
            rules={[{ required: true, message: "Hãy nhập chuyên khoa!" }]}
          >
            <Input placeholder="Nhập chuyên khoa" />
          </Form.Item>

          <Form.Item
            name="experience"
            label="Kinh Nghiệm (năm)"
            rules={[
              { required: true, message: "Hãy nhập số năm kinh nghiệm!" },
            ]}
          >
            <InputNumber placeholder="Nhập số năm kinh nghiệm" min={0} />
          </Form.Item>

          <Form.Item name="qualifications" label="Bằng Cấp">
            <Input placeholder="Nhập bằng cấp, cách nhau bằng dấu phẩy" />
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default ManageDoctor;
