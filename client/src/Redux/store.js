import { configureStore } from '@reduxjs/toolkit';
import { doctorApiSlice } from './Doctor/api'; 
import { appointmentApiSlice } from './Appointment/api'; 
import userReducer from './User/userSlice';  

const store = configureStore({
  reducer: {
    [doctorApiSlice.reducerPath]: doctorApiSlice.reducer,
    [appointmentApiSlice.reducerPath]: appointmentApiSlice.reducer,
    user: userReducer,  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(doctorApiSlice.middleware)
      .concat(appointmentApiSlice.middleware), 
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
