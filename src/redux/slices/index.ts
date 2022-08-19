import { combineReducers } from '@reduxjs/toolkit';
import AuthSlice from './authSlice';
import sellerCountrySlice from './sellerCountrySlice';
import sellerstateSlice from './sellerstateSlice';

const reducer = combineReducers({
  authSlice: AuthSlice,
  sellerCountry: sellerCountrySlice,
  sellerstate: sellerstateSlice,
});

export default reducer;
