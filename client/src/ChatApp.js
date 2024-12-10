import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import axios from "axios";
const ChatApp = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chatRooms, setChatRooms] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);
  const [activeChatName, setActiveChatName] = useState("");
  const userId = useSelector((state) => state.user?.userInfo?.id);
  // Tạo tham chiếu đến container của danh sách tin nhắn
  const messagesEndRef = useRef(null);
  useEffect(() => {
    if (!userId) return;
    const fetchChatRooms = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5000/api/chatList",
          // const response = await axios.get(
          //   "https://phongkhamonline.onrender.com/api/chatList",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setChatRooms(response.data.chats);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách phòng chat:", error);
      }
    };
    fetchChatRooms();
  }, [userId]);
  useEffect(() => {
    if (!activeChatId) return;
    const newSocket = io("http://localhost:5000");
    // const newSocket = io("/");
    setSocket(newSocket);
    // Tham gia phòng chat
    newSocket.emit("joinChat", activeChatId);
    // Nhận tin nhắn mới
    newSocket.on("newMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    // Lấy tin nhắn từ phòng chat
    newSocket.emit("getMessages", activeChatId);
    newSocket.on("messages", (fetchedMessages) => {
      setMessages(fetchedMessages);
    });
    return () => {
      newSocket.disconnect();
    };
  }, [activeChatId]);
  useEffect(() => {
    // Cuộn xuống cuối danh sách tin nhắn khi tin nhắn mới được thêm
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const sendMessage = (e) => {
    e.preventDefault();
    if (input.trim() && userId && activeChatId) {
      socket.emit("sendMessage", {
        chatId: activeChatId,
        senderId: userId,
        content: input,
      });
      setInput("");
    }
  };
  const toggleChatRoom = (roomId, roomName) => {
    setActiveChatId(roomId);
    setActiveChatName(roomName);
  };
  if (!userId) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-50">
        <p className="text-gray-500">
          Vui lòng đăng nhập để sử dụng chức năng chat.
        </p>
      </div>
    );
  }
  return (
    <div className="flex h-[580px]">
      {/* Danh sách phòng chat (bên trái) */}
      <div
        className="w-1/4 bg-gray-200 p-4"
        style={{
          borderRight: "1px solid #e5e7eb",
          overflowY: "auto", // Thanh cuộn cho danh sách phòng chat
          maxHeight: "100vh",
        }}
      >
        <h3 className="font-bold text-lg mb-4">Hộp Thư</h3>
        {chatRooms.length > 0 ? (
          chatRooms.map((room) => (
            <button
              key={room.chatId}
              className={`block w-full text-left px-4 py-2 rounded-lg mb-2 ${
                activeChatId === room.chatId
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-black"
              }`}
              onClick={() => toggleChatRoom(room.chatId, room.fullName)}
            >
              {room.fullName}
            </button>
          ))
        ) : (
          <p className="text-gray-500">Không có phòng chat nào.</p>
        )}
      </div>
      {/* Phòng chat (bên phải) */}
      <div className="flex-1 flex flex-col">
        {!activeChatId && (
          <div className="flex items-center justify-center h-[400px] bg-gray-50">
            <p className="text-gray-500">Chọn một phòng chat để bắt đầu.</p>
          </div>
        )}
        {activeChatId && (
          <div className="flex flex-col flex-1 h-[300px]">
            {/* Tiêu đề phòng chat */}
            <div className="p-4 bg-blue-500 text-white font-bold">
              {activeChatName}
            </div>
            {/* Danh sách tin nhắn */}
            <div
              className="flex-1 p-4 bg-gray-100"
              style={{
                overflowY: "auto", // Thanh cuộn cho danh sách tin nhắn
                maxHeight: "calc(100vh - 140px)", // Điều chỉnh chiều cao
              }}
            >
              {messages.length > 0 ? (
                messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.sender === "doctor"
                        ? "justify-end"
                        : "justify-start"
                    } mb-2`}
                  >
                    <div
                      className={`max-w-xs p-2 rounded-lg ${
                        message.sender === "doctor"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      <p>{message.content}</p>
                      <span className="text-xs text-gray-400">
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Chưa có tin nhắn nào.</p>
              )}
              <div ref={messagesEndRef} /> {/* Tham chiếu đến cuối danh sách */}
            </div>
            {/* Ô nhập tin nhắn */}
            <form
              className="p-4 border-t bg-white flex gap-2"
              onSubmit={sendMessage}
            >
              <input
                type="text"
                className="flex-1 border rounded-lg p-2 focus:ring focus:ring-blue-300"
                placeholder="Nhập tin nhắn..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Gửi
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default ChatApp;
