import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:5000";

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

// Tạo slice API cho Doctor
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
    getDoctorById: builder.query({
      query: (doctorId) => `/api/doctor/${doctorId}`,
    }),
    updateDoctorProfile: builder.mutation({
      query: (updatedDoctorProfile) => ({
        url: "/api/doctor/profile/update",
        method: "PUT",
        body: updatedDoctorProfile,
      }),
    }),
  }),
});

// Export các hook để sử dụng trong component
export const {
  useGetAllDoctorsQuery,
  useGetDoctorProfileQuery,
  useUpdateDoctorProfileMutation,
  useGetDoctorByIdQuery,
} = doctorApiSlice;

export default doctorApiSlice;
