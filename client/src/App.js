import React, { useState } from "react";
import AppRouter from "./routes/AppRouter";
import ChatApp from "./ChatApp";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  // Đóng/mở modal
  const toggleChatModal = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <AppRouter />
      {/* Icon mở modal */}
      <div
        style={{
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          backgroundColor: "#1e40af", // Màu xanh đậm
          padding: "1rem",
          borderRadius: "50%",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          transition: "background-color 0.2s ease-in-out",
        }}
        onClick={toggleChatModal}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")} // Màu xanh sáng khi hover
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1e40af")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "24px", width: "24px", color: "white" }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M9 20h6"
          />
        </svg>
      </div>
      {/* Modal chat */}
      {isChatOpen && (
        <div
          style={{
            position: "fixed",
            top: 20,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Nền mờ
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              width: "70rem", // Giảm chiều rộng
              maxWidth: "95%", // Đảm bảo không vượt quá màn hình
              height: "90vh", // Cố định chiều cao
              maxHeight: "90vh", // Đảm bảo không vượt quá chiều cao màn hình
              borderRadius: "8px",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              marginTop: 40,
            }}
          >
            {/* Header của modal */}
            <div
              style={{
                paddingTop: "1rem",
                padding: "1rem",
                borderBottom: "1px solid #e5e7eb",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  color: "chocolate",
                }}
              >
                Nhắn Tin Hỗ Trợ
              </h3>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#6b7280",
                  fontSize: "1.25rem",
                  cursor: "pointer",
                }}
                onClick={toggleChatModal}
              >
                ✕
              </button>
            </div>
            {/* Nội dung ChatApp */}
            <div style={{ flex: 1, padding: "1rem" }}>
              <ChatApp />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
