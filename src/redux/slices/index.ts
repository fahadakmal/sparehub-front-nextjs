import { combineReducers } from '@reduxjs/toolkit';
import AuthSlice from './authSlice';

const reducer = combineReducers({
  authSlice: AuthSlice
});

export default reducer;
