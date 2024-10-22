import { configureStore } from '@reduxjs/toolkit';
import { doctorApiSlice } from './Doctor/api'; 
import userReducer from './User/userSlice';  

const store = configureStore({
  reducer: {
    [doctorApiSlice.reducerPath]: doctorApiSlice.reducer,
    user: userReducer,  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(doctorApiSlice.middleware), 
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
