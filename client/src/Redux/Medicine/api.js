import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base URL của API, bạn có thể cấu hình lại cho phù hợp với URL server của mình
const BASE_URL = "http://localhost:5000/api";

// Tạo API slice cho các chức năng liên quan đến Medicine
export const medicineApiSlice = createApi({
  reducerPath: "medicineApi", // Đường dẫn trong store Redux
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
  tagTypes: ["Medicine"], // Đánh dấu để quản lý cache và refetch
  endpoints: (builder) => ({
    // API tạo thuốc
    createMedicine: builder.mutation({
      query: (medicineData) => ({
        url: "/medicines",
        method: "POST",
        body: medicineData,
      }),
      invalidatesTags: ["Medicine"], // Invalidate cache để refetch khi tạo mới
    }),

    // API lấy danh sách thuốc
    getMedicines: builder.query({
      query: () => "/medicines",
      method: "GET",
      providesTags: ["Medicine"], // Cache kết quả
    }),

    // API cập nhật thuốc
    updateMedicine: builder.mutation({
      query: ({ medicineId, ...medicineData }) => ({
        url: `/medicines/${medicineId}`,
        method: "PUT",
        body: medicineData,
      }),
      invalidatesTags: ["Medicine"], // Invalidate cache khi cập nhật
    }),

    // API xóa thuốc
    deleteMedicine: builder.mutation({
      query: (medicineId) => ({
        url: `/medicines/${medicineId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Medicine"], // Invalidate cache khi xóa thuốc
    }),
  }),
});

// Export các hooks để sử dụng trong component
export const {
  useCreateMedicineMutation,
  useGetMedicinesQuery,
  useUpdateMedicineMutation,
  useDeleteMedicineMutation,
} = medicineApiSlice;

export default medicineApiSlice;
