import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Định nghĩa URL cơ bản của API
// const BASE_URL = process.env.BASE_URL;
const BASE_URL = "http://localhost:5000/api";
// Tạo API slice cho các chức năng liên quan đến chat
export const chatApiSlice = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      // Lấy token từ localStorage
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Chat"], // Đánh dấu để quản lý cache và refetch
  endpoints: (builder) => ({
    // API tạo cuộc trò chuyện mới
    createChat: builder.mutation({
      query: (chatData) => ({
        url: "/create",
        method: "POST",
        body: chatData,
      }),
      invalidatesTags: ["Chat"], // Invalidate cache khi tạo cuộc trò chuyện mới
    }),
    // API gửi tin nhắn
    sendMessage: builder.mutation({
      query: ({ chatId, content }) => ({
        url: "/send",
        method: "POST",
        body: { chatId, content },
      }),
      invalidatesTags: ["Chat"], // Invalidate cache khi gửi tin nhắn
    }),
    // API lấy danh sách tin nhắn của cuộc trò chuyện
    getMessages: builder.query({
      query: (chatId) => ({
        url: `/${chatId}/messages`,
        method: "GET",
      }),
      providesTags: ["Chat"], // Cache kết quả
    }),
    getChatList: builder.query({
      query: () => ({
        url: "/chatList",
        method: "GET",
      }),
      providesTags: ["Chat"], // Cache kết quả
    }),
  }),
});
// Export các hooks để sử dụng trong component
export const {
  useCreateChatMutation,
  useSendMessageMutation,
  useGetMessagesQuery,
  useGetChatListQuery,
} = chatApiSlice;
export default chatApiSlice;
