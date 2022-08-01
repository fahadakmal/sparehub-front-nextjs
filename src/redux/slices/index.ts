import { combineReducers } from '@reduxjs/toolkit';
import UserSlice from './userSlice';
import AuthSlice from './authSlice';

const reducer = combineReducers({
  users: UserSlice,
  authSlice: AuthSlice,
});

export default reducer;
