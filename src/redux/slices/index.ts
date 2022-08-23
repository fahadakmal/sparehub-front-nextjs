import { combineReducers } from '@reduxjs/toolkit';
import AuthSlice from './authSlice';
import LanguageSlice from './languageSlice';

const reducer = combineReducers({
  authSlice: AuthSlice,
  languageSlice: LanguageSlice,
});

export default reducer;
