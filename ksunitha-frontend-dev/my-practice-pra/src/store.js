import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from './Redux/Slices/LoginSlice';
import HoldingsSlice from './Redux/Slices/HoldingsSlice';
import BidsSlice from './Redux/Slices/BidsSlice'

export const store = configureStore({
  reducer: {
    LoginForm: LoginSlice,
    HoldingsForm: HoldingsSlice,
    BidsForm:BidsSlice
  },
});

export default store;
