import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Lấy doctorId từ URL và điều hướng
import { DatePicker, TimePicker, Input, Button, message } from 'antd';
import moment from 'moment';
import { useCreateAppointmentMutation } from '../../Redux/Appointment/api'; // Import hook tạo lịch hẹn từ RTK slice

const BookAppointment = () => {
  const { doctorId } = useParams(); 
  const navigate = useNavigate();
  const [createAppointment, { isLoading }] = useCreateAppointmentMutation();

  const [date, setDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [reasonForVisit, setReasonForVisit] = useState('');
  const [notes, setNotes] = useState(''); // Trường mới cho "triệu chứng"

  const handleSubmit = async () => {
    if (!date || !startTime || !endTime || !reasonForVisit) {
      return message.error('Vui lòng nhập đầy đủ thông tin!');
    }

    const appointmentData = {
      doctorId,
      date: moment(date).format('YYYY-MM-DD'),
      startTime: moment(startTime).format('HH:mm'),
      endTime: moment(endTime).format('HH:mm'),
      reasonForVisit,
      notes, // Trường triệu chứng được thêm vào
    };

    try {
      // Gọi API để tạo lịch hẹn
      await createAppointment(appointmentData).unwrap();
      message.success('Đặt lịch hẹn thành công!');
      
      // Điều hướng sau khi thành công
      navigate('/'); // Điều hướng về trang chủ sau khi đặt lịch thành công
    } catch (error) {
      message.error('Đặt lịch hẹn thất bại!');
    }
  };

  return (
    <div className="container mx-auto py-6">
      <h2>Đặt Lịch Hẹn</h2>
      <form className="space-y-4">
        <div>
          <label>Chọn Ngày</label>
          <DatePicker onChange={(value) => setDate(value)} />
        </div>
        <div>
          <label>Giờ Bắt Đầu</label>
          <TimePicker onChange={(value) => setStartTime(value)} format="HH:mm" />
        </div>
        <div>
          <label>Giờ Kết Thúc</label>
          <TimePicker onChange={(value) => setEndTime(value)} format="HH:mm" />
        </div>
        <div>
          <label>Lý Do Khám Bệnh</label>
          <Input.TextArea
            rows={4}
            value={reasonForVisit}
            onChange={(e) => setReasonForVisit(e.target.value)}
          />
        </div>
        <div>
          <label>Triệu Chứng</label> {/* Thêm trường triệu chứng */}
          <Input.TextArea
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)} // Cập nhật giá trị cho triệu chứng
            placeholder="Triệu chứng hoặc ghi chú thêm"
          />
        </div>
        <Button type="primary" onClick={handleSubmit} loading={isLoading}>
          {isLoading ? 'Đang Đặt...' : 'Đặt Lịch'}
        </Button>
      </form>
    </div>
  );
};

export default BookAppointment;
