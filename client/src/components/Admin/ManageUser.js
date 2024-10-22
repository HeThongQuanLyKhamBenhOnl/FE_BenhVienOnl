import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPatients } from '../../Redux/User/userSlice'; 
import { Table, Button, Space } from 'antd';

const ManageUser = () => {
  const dispatch = useDispatch();

  const { patients, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllPatients());
  }, [dispatch]);

  const columns = [
    {
      title: 'Họ Tên',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Số Điện Thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Giới Tính',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Ngày Sinh',
      dataIndex: 'dateOfBirth',
      key: 'dateOfBirth',
      render: (text) => new Date(text).toLocaleDateString(),
    },
    {
      title: 'Địa Chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Hành Động',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary">Sửa</Button>
          <Button type="danger">Xóa</Button>
        </Space>
      ),
    },
  ];

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p>Có lỗi xảy ra: {error}</p>;

  return (
    <div>
      <h1>Quản Lý Người Dùng</h1>
      <Table columns={columns} dataSource={patients} rowKey="id" />
    </div>
  );
};

export default ManageUser;
