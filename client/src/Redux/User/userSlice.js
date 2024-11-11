import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

// Đăng ký người dùng
export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await API.post("/api/users/register", userData);
      return response.data;
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue({ message });
    }
  }
);

// Đăng nhập người dùng
export const loginUser = createAsyncThunk(
  "user/login",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await API.post("/api/users/login", userCredentials);
      return response.data;
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue({ message });
    }
  }
);

export const getProfile = createAsyncThunk(
  "user/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/api/users/profile");
      return response.data;
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue({ message });
    }
  }
);

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await API.put("/api/users/profile", userData);
      return response.data;
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue({ message });
    }
  }
);

export const getAllPatients = createAsyncThunk(
  "user/getAllPatients",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token"); // Lấy token từ localStorage
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Gửi token trong header
        },
      };
      const response = await API.get("/api/users/getAllPatients", config);
      return response.data;
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue({ message });
    }
  }
);

export const getAllDoctors = createAsyncThunk(
  "user/getAllDoctors",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/api/users/getAllDoctors");
      return response.data;
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue({ message });
    }
  }
);
export const createDoctor = createAsyncThunk(
  "user/createDoctor",
  async (doctorData, { rejectWithValue }) => {
    try {
      const response = await API.post("/api/users/createDoctor", doctorData);
      return response.data;
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue({ message });
    }
  }
);

export const getUpdatedMedicalRecords = createAsyncThunk(
  "user/getUpdatedMedicalRecords",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get("/api/medical-records/updated");
      return response.data;
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue({ message });
    }
  }
);

// Password reset request
export const requestPasswordReset = createAsyncThunk(
  "user/requestPasswordReset",
  async (email, { rejectWithValue }) => {
    try {
      const response = await API.post("/api/users/requestPasswordReset", {
        email,
      });
      return response.data;
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue({ message });
    }
  }
);

// Confirm OTP
export const confirmOTP = createAsyncThunk(
  "user/confirmOTP",
  async (otpData, { rejectWithValue }) => {
    try {
      const response = await API.post("/api/users/confirm-otp", otpData); // Adjust endpoint if necessary
      return response.data;
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue({ message });
    }
  }
);
// Yêu cầu đặt lại mật khẩu
export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      const response = await API.post("/api/users/forgot-password", { email });
      return response.data; // API trả về message thành công nếu email hợp lệ
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      return rejectWithValue({ message });
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    token: null,
    loading: false,
    error: null,
    successMessage: null,
    updatedMedicalRecords: [],
  },
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      state.token = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
    },
    setUser: (state, action) => {
      state.userInfo = action.payload.user;
      state.token = action.payload.token;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSuccessMessage: (state) => {
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Xử lý đăng ký người dùng
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("userInfo", JSON.stringify(action.payload.user)); // Lưu userInfo vào localStorage
        localStorage.setItem("token", action.payload.token); // Lưu token vào localStorage
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      // Xử lý đăng nhập người dùng
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("userInfo", JSON.stringify(action.payload.user)); // Lưu userInfo vào localStorage
        localStorage.setItem("token", action.payload.token); // Lưu token vào localStorage
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      .addCase(createDoctor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDoctor.fulfilled, (state, action) => {
        state.loading = false;
        // Xử lý dữ liệu sau khi tạo bác sĩ thành công, có thể lưu thông tin bác sĩ nếu cần
      })
      .addCase(createDoctor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      // Xử lý lấy thông tin hồ sơ người dùng
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.user;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      // Xử lý cập nhật hồ sơ người dùng
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.user;
        localStorage.setItem("userInfo", JSON.stringify(action.payload.user)); // Cập nhật thông tin trong localStorage
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(getAllPatients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPatients.fulfilled, (state, action) => {
        state.loading = false;
        state.patients = action.payload.patients;
      })
      .addCase(getAllPatients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(getAllDoctors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctors = action.payload.doctors;
      })
      .addCase(getAllDoctors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      // Xử lý lấy hồ sơ bệnh án đã cập nhật
      .addCase(getUpdatedMedicalRecords.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUpdatedMedicalRecords.fulfilled, (state, action) => {
        state.loading = false;
        state.updatedMedicalRecords = action.payload.medicalRecords;
      })
      .addCase(getUpdatedMedicalRecords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      // Handle password reset request
      .addCase(requestPasswordReset.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(requestPasswordReset.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message; // Set success message if provided by API
      })
      .addCase(requestPasswordReset.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      // Confirm OTP Cases
      .addCase(confirmOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(confirmOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message; // Assuming API returns success message
      })
      .addCase(confirmOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      // Xử lý yêu cầu quên mật khẩu
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message; // Đặt thông báo thành công từ API
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message; // Đặt thông báo lỗi nếu có
      });
  },
});

export const { logout, setUser, clearError, clearSuccessMessage } =
  userSlice.actions;
export default userSlice.reducer;
