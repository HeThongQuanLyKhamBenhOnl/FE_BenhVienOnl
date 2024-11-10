import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestPasswordReset, clearError } from "../../Redux/User/userSlice"; // Assuming action exists

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, loading, successMessage } = useSelector((state) => state.user);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    dispatch(requestPasswordReset({ email }));
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearError());
    }

    if (successMessage) {
      alert(successMessage); // Show success message to the user
      navigate("/confirm-otp"); // Navigate to OTP or verification page
    }
  }, [error, successMessage, dispatch, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-green-400">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Quên Mật Khẩu</h2>
        <form onSubmit={handleForgotPassword} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Gửi yêu cầu"}
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="/login" className="text-sm text-teal-600 hover:underline">
            Quay lại đăng nhập
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
