import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base URL của API, bạn có thể cấu hình lại cho phù hợp với URL server của mình
// const BASE_URL = "https://phongkhamonline.onrender.com/api";
const BASE_URL = "http://localhost:5000/api";

// Tạo API slice cho các chức năng liên quan đến Appointment
export const appointmentApiSlice = createApi({
  reducerPath: "appointmentApi", // Đường dẫn trong store Redux
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL, // Địa chỉ API
    prepareHeaders: (headers) => {
      // Lấy token từ localStorage
      const token = localStorage.getItem("token"); // Giả sử bạn lưu token với key là 'token'

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Appointment"], // Đánh dấu để quản lý cache và refetch
  endpoints: (builder) => ({
    // API tạo lịch hẹn
    createAppointment: builder.mutation({
      query: (appointmentData) => ({
        url: "/appointments",
        method: "POST",
        body: appointmentData,
      }),
      invalidatesTags: ["Appointment"], // Invalidate cache để refetch khi tạo mới
    }),

    // API lấy danh sách lịch hẹn
    getAppointments: builder.query({
      query: () => "/appointments",
      method: "GET",
      providesTags: ["Appointment"], // Cache kết quả
    }),

    // API cập nhật trạng thái lịch hẹn
    updateAppointmentStatus: builder.mutation({
      query: ({ appointmentId, status }) => ({
        url: `/appointments/${appointmentId}/status`,
        method: "PUT",
        body: { status },
      }),
      invalidatesTags: ["Appointment"], // Invalidate cache khi cập nhật
    }),

    // API hủy lịch hẹn
    cancelAppointment: builder.mutation({
      query: (appointmentId) => ({
        url: `/appointments/${appointmentId}/cancel`,
        method: "PUT",
      }),
      invalidatesTags: ["Appointment"], // Invalidate cache khi hủy lịch hẹn
    }),

    // API dời lịch hẹn
    rescheduleAppointment: builder.mutation({
      query: ({ appointmentId, date, startTime, endTime }) => ({
        url: `/appointments/${appointmentId}/reschedule`,
        method: "PUT",
        body: { date, startTime, endTime },
      }),
      invalidatesTags: ["Appointment"], // Invalidate cache khi dời lịch
    }),

    // API thống kê lịch hẹn
    getAppointmentStats: builder.query({
      query: (period) => ({
        url: `/appointment-stats?period=month`,
        method: "GET",
      }),
    }),

    // API lấy bác sĩ có số lượng đặt lịch nhiều nhất
    getTopDoctor: builder.query({
      query: () => ({
        url: "/top-doctor",
        method: "GET",
      }),
    }),

    // API lấy danh sách bác sĩ có số lượng đặt lịch nhiều nhất trong tháng
    getTopDoctorsInMonth: builder.query({
      query: () => ({
        url: "/top-doctors-month",
        method: "GET",
      }),
    }),
  }),
});

// Export các hooks để sử dụng trong component
export const {
  useCreateAppointmentMutation,
  useGetAppointmentsQuery,
  useUpdateAppointmentStatusMutation,
  useCancelAppointmentMutation,
  useRescheduleAppointmentMutation,
  useGetAppointmentStatsQuery,
  useGetTopDoctorQuery,
  useGetTopDoctorsInMonthQuery,
} = appointmentApiSlice;

export default appointmentApiSlice;
