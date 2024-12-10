import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const BASE_URL = process.env.REACT_APP_API_URL;

// const BASE_URL = "https://phongkhamonline.onrender.com";
const BASE_URL = "http://localhost:5000";
// Base query có hỗ trợ token để tự động thêm vào header khi có token
const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
      console.log("Token added to headers:", token);
    } else {
      console.log("No token found");
    }
    return headers;
  },
});

// Khởi tạo doctorApiSlice với các endpoints liên quan đến bác sĩ và lịch hẹn
export const doctorApiSlice = createApi({
  reducerPath: "doctorApi", // Đường dẫn reducer cho API slice
  baseQuery: baseQueryWithAuth, // Sử dụng baseQuery có token
  endpoints: (builder) => ({
    // Lấy danh sách tất cả bác sĩ
    getAllDoctors: builder.query({
      query: () => "/api/all", // Endpoint lấy tất cả bác sĩ
    }),
    // Lấy thông tin hồ sơ bác sĩ
    getDoctorProfile: builder.query({
      query: () => "/api/doctor/profile",
    }),
    // Lấy thông tin bác sĩ cụ thể qua ID
    getDoctorById: builder.query({
      query: (doctorId) => `/api/doctor/${doctorId}`,
    }),
    // Cập nhật hồ sơ bác sĩ
    updateDoctorProfile: builder.mutation({
      query: (updatedDoctorProfile) => ({
        url: "/api/doctor/profile/update",
        method: "PUT",
        body: updatedDoctorProfile,
      }),
    }),
    // Tạo lịch hẹn
    createAppointment: builder.mutation({
      query: (newAppointment) => ({
        url: "/api/appointments",
        method: "POST",
        body: newAppointment,
      }),
    }),
    // Lấy danh sách lịch hẹn
    getAppointments: builder.query({
      query: () => "/api/appointments/me",
    }),
    // Cập nhật trạng thái lịch hẹn (chỉ bác sĩ)
    updateAppointmentStatus: builder.mutation({
      query: ({ appointmentId, status }) => ({
        url: `/api/appointments/${appointmentId}/status`,
        method: "PUT",
        body: { status },
      }),
    }),
    // Lấy danh sách lịch hẹn của bác sĩ (chỉ bác sĩ)
    getDoctorAppointments: builder.query({
      query: () => "/api/appointments/doctor",
    }),
    getAllMedicalRecords: builder.query({
      query: () => "api/medical-records/me",
    }),
    // Hủy lịch hẹn
    cancelAppointment: builder.mutation({
      query: ({ appointmentId }) => ({
        url: `/api/appointments/${appointmentId}/cancel`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    rescheduleAppointment: builder.mutation({
      query: ({ appointmentId, newDate }) => ({
        url: `api/appointments/${appointmentId}/reschedule`,
        method: "PUT",
        body: { newDate },
      }),
    }),
    // Cập nhật hồ sơ y tế (chỉ bác sĩ)
    updateMedicalRecord: builder.mutation({
      query: ({ recordId, ...body }) => ({
        url: `/api/medical-records/${recordId}`,
        method: "PUT",
        body,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    // Tạo lịch làm việc của bác sĩ
    createSchedule: builder.mutation({
      query: (schedule) => ({
        url: "/api/doctor/schedule",
        method: "POST",
        body: schedule,
      }),
    }),
    // Lấy lịch làm việc của bác sĩ
    getDoctorSchedule: builder.query({
      query: () => "/api/doctor/schedule/me",
    }),
    getSchedule: builder.query({
      query: (doctorId) => ({
        url: `/api/schedule/${doctorId}`,
        method: "GET",
      }),
    }),
    // Cập nhật lịch làm việc của bác sĩ
    updateDoctorSchedule: builder.mutation({
      query: ({ scheduleId, updatedSchedule }) => ({
        url: "/api/doctor/scheduleUpdate",
        method: "PUT",
        body: { scheduleId, ...updatedSchedule },
      }),
    }),
    getDoctorMedicalRecords: builder.query({
      query: () => "/api/medical-records/doctor",
    }),
    handlePaymentSuccess: builder.query({
      query: ({ orderCode, status }) =>
        `/api/medical-records/payment-success?orderCode=${orderCode}&status=${status}`,
    }),
  }),
});

// Export các hook để sử dụng trong component
export const {
  useGetAllDoctorsQuery,
  useGetDoctorProfileQuery,
  useGetDoctorByIdQuery,
  useUpdateDoctorProfileMutation,
  useCreateAppointmentMutation,
  useGetAppointmentsQuery,
  useUpdateAppointmentStatusMutation,
  useGetDoctorAppointmentsQuery,
  useCancelAppointmentMutation,
  useRescheduleAppointmentMutation,
  useUpdateMedicalRecordMutation,
  useGetAllMedicalRecordsQuery,
  useCreateScheduleMutation,
  useGetDoctorScheduleQuery,
  useUpdateDoctorScheduleMutation,
  useGetDoctorMedicalRecordsQuery,
  useHandlePaymentSuccessQuery,
  useGetScheduleQuery,
} = doctorApiSlice;

export default doctorApiSlice;
