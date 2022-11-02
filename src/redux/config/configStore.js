import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import PinSlice from '../module/PinSlice';
import user from '../module/LoginSlice'

const store = configureStore({
  reducer: {
    PinSlice,
    user
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
