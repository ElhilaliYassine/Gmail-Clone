import { configureStore } from '@reduxjs/toolkit';
import mailSlice from '../features/mailSlice';
import userSlice from '../features/userSlice';

export const store = configureStore({
  reducer: {
    mail: mailSlice,
    user: userSlice
  },
});
