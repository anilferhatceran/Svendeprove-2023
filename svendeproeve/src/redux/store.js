import { configureStore } from "@reduxjs/toolkit";
import modalReducer from '../features/modal/ModalSlice'

export const store = configureStore({
  reducer: {
    modal: modalReducer
  },
});
