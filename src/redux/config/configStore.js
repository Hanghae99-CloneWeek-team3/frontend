import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import PinSlice from '../module/PinSlice';
import CommentSlice from '../module/CommentSlice';

const store = configureStore({
  reducer: {
    PinSlice, CommentSlice
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
