import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { confirmOTP, clearError } from "../../Redux/User/userSlice"; // Assuming confirmOTP action exists

const ConfirmOTP = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, loading, successMessage } = useSelector((state) => state.user);

  const handleOTPConfirmation = (e) => {
    e.preventDefault();
    dispatch(confirmOTP({ otp })); // Dispatch the confirmOTP action with the entered OTP
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearError());
    }

    if (successMessage) {
      alert(successMessage); // Show success message to the user
      navigate("/reset-password"); // Navigate to reset password page
    }
  }, [error, successMessage, dispatch, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-400 to-green-400">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Xác nhận mã OTP</h2>
        <form onSubmit={handleOTPConfirmation} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Nhập mã OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition duration-300"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Xác nhận OTP"}
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

export default ConfirmOTP;
