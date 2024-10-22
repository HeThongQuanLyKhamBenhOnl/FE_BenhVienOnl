import React, { useState, useEffect } from 'react';
import { useGetDoctorProfileQuery, useUpdateDoctorProfileMutation } from '../../Redux/Doctor/api';
import { Form, Input, Button, message } from 'antd';  // Import các component từ AntD

const DoctorProfile = () => {
  const { data: profile, error, isLoading } = useGetDoctorProfileQuery();
  const [updateDoctorProfile] = useUpdateDoctorProfileMutation();

  const [formData, setFormData] = useState({
    specialty: '',
    experience: '',
    qualifications: []
  });

  // Cập nhật formData khi dữ liệu profile từ API được trả về
  useEffect(() => {
    if (profile) {
      setFormData({
        specialty: profile.doctor.specialty || '',
        experience: profile.doctor.experience || '',
        qualifications: profile.doctor.qualifications || []
      });
    }
  }, [profile]);

  const handleSubmit = async () => {
    try {
      await updateDoctorProfile(formData).unwrap();
      message.success("Profile updated successfully!");
    } catch (error) {
      message.error("Failed to update profile.");
    }
  };

  // Loading và error xử lý
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-center mb-4">Doctor Profile</h1>
      <Form
        layout="vertical"
        onFinish={handleSubmit}
        className="space-y-4"
      >
        <Form.Item label="Specialty">
          <Input
            value={formData.specialty}
            onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
            placeholder="Specialty"
          />
        </Form.Item>

        <Form.Item label="Experience (years)">
          <Input
            type="number"
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            placeholder="Experience"
          />
        </Form.Item>

        <Form.Item label="Qualifications">
          <Input
            value={formData.qualifications.join(', ')}
            onChange={(e) => setFormData({ ...formData, qualifications: e.target.value.split(',') })}
            placeholder="Qualifications (comma separated)"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Update Profile
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DoctorProfile;
