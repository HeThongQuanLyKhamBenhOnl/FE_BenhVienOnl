import React, { useEffect, useState } from "react";
import {
  useGetMessagesQuery,
  useCreateChatMutation,
  useSendMessageMutation,
} from "../../Redux/Chat/api";
import { useSelector } from "react-redux";
import io from "socket.io-client";

// Kết nối tới server Socket.IO
const socket = io("http://localhost:5000");

const ChatBox = ({ chatId, doctorId, patientId }) => {
  const [messageContent, setMessageContent] = useState("");
  const { role, _id: userId } = useSelector(
    (state) => state.user.userInfo || {}
  ); // Lấy role và userId từ userInfo
  const { data: initialMessages, refetch } = useGetMessagesQuery(chatId, {
    skip: !chatId, // Bỏ qua nếu chưa có chatId
  });
  const [createChat] = useCreateChatMutation();
  const [sendMessage] = useSendMessageMutation(); // Hook API để gửi tin nhắn
  const [messages, setMessages] = useState([]); // Trạng thái lưu trữ tin nhắn

  useEffect(() => {
    // Tham gia phòng chat nếu đã có chatId
    if (chatId) {
      socket.emit("joinChat", chatId);
      setMessages(initialMessages || []);
    } else {
      // Tạo cuộc trò chuyện mới nếu chưa có
      createChat({ doctorId, patientId }).then(({ data }) => {
        if (data) {
          socket.emit("joinChat", data.chat._id);
          refetch();
        }
      });
    }

    // Nhận tin nhắn mới từ Socket.IO
    socket.on("newMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // Dọn dẹp khi component bị huỷ
    return () => {
      socket.off("newMessage");
    };
  }, [chatId, createChat, doctorId, patientId, initialMessages, refetch]);

  // Hàm gửi tin nhắn
  const handleSendMessage = async () => {
    if (messageContent.trim()) {
      const messageData = {
        chatId,
        content: messageContent,
      };

      try {
        // Gửi tin nhắn qua API
        const { data: newMessage } = await sendMessage(messageData).unwrap();

        // Phát tin nhắn qua Socket.IO sau khi gửi thành công qua API
        socket.emit("sendMessage", {
          chatId,
          senderId: userId,
          content: messageContent,
        });

        // Cập nhật giao diện sau khi gửi tin nhắn
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setMessageContent(""); // Xóa nội dung ô nhập sau khi gửi
      } catch (error) {
        console.error("Lỗi khi gửi tin nhắn:", error);
      }
    }
  };

  return (
    <div style={styles.chatBox}>
      <div style={styles.header}>
        <h2>Hộp Thoại Chat</h2>
      </div>
      <div style={styles.messages}>
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} role={role} />
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          type="text"
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          placeholder="Nhập tin nhắn..."
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.sendButton}>
          Gửi
        </button>
      </div>
    </div>
  );
};

// Component MessageBubble để hiển thị tin nhắn
const MessageBubble = ({ message, role }) => {
  const isSender = message.sender === role; // Kiểm tra nếu tin nhắn được gửi bởi người dùng hiện tại
  return (
    <div
      style={{
        ...styles.messageBubble,
        ...(isSender ? styles.sent : styles.received),
      }}
    >
      <p>{message.content}</p>
      <span style={styles.timestamp}>
        {new Date(message.timestamp).toLocaleTimeString()}
      </span>
    </div>
  );
};

// CSS Inline cho các thành phần giao diện
const styles = {
  chatBox: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "600px",
    margin: "20px auto",
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  header: {
    backgroundColor: "#4caf50",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    fontWeight: "bold",
  },
  messages: {
    flex: 1,
    overflowY: "auto",
    padding: "10px",
    backgroundColor: "#f7f7f7",
    height: "400px",
  },
  inputArea: {
    display: "flex",
    gap: "10px",
    padding: "10px",
    borderTop: "1px solid #ddd",
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
  },
  sendButton: {
    padding: "10px 20px",
    border: "none",
    backgroundColor: "#4caf50",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  messageBubble: {
    maxWidth: "70%",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "10px",
    position: "relative",
    display: "inline-block",
    fontSize: "14px",
    lineHeight: "1.4",
  },
  sent: {
    backgroundColor: "#e6f7ff",
    alignSelf: "flex-end",
    borderTopRightRadius: "0",
  },
  received: {
    backgroundColor: "#fff3e0",
    alignSelf: "flex-start",
    borderTopLeftRadius: "0",
  },
  timestamp: {
    fontSize: "0.8rem",
    color: "#888",
    display: "block",
    textAlign: "right",
    marginTop: "5px",
  },
};

export default ChatBox;
