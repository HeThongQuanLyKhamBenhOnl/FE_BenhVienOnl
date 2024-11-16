import { configureStore } from "@reduxjs/toolkit";
import { doctorApiSlice } from "./Doctor/api";
import { appointmentApiSlice } from "./Appointment/api";
import { medicineApiSlice } from "./Medicine/api";
import { chatApiSlice } from "./Chat/api";
import userReducer from "./User/userSlice";

const store = configureStore({
  reducer: {
    [doctorApiSlice.reducerPath]: doctorApiSlice.reducer,
    [appointmentApiSlice.reducerPath]: appointmentApiSlice.reducer,
    [medicineApiSlice.reducerPath]: medicineApiSlice.reducer,
    [chatApiSlice.reducerPath]: chatApiSlice.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(doctorApiSlice.middleware)
      .concat(appointmentApiSlice.middleware)
      .concat(medicineApiSlice.middleware)
      .concat(chatApiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;