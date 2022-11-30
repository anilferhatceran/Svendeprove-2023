import { configureStore } from "@reduxjs/toolkit";
import modalReducer from '../features/modal/ModalSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
  },
});
