import { combineReducers } from '@reduxjs/toolkit';
import UserSlice from './userSlice';
const reducer = combineReducers({
	users: UserSlice,
});

export default reducer;
