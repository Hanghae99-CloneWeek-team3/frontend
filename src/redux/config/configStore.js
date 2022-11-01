import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import PinSlice from '../module/PinSlice';

const store = configureStore({
  reducer: {
    PinSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
