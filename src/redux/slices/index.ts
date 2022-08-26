import { combineReducers } from '@reduxjs/toolkit';
import AddressSlice from './addressSlice';
import AuthSlice from './authSlice';
import LanguageSlice from './languageSlice';

const reducer = combineReducers({
  authSlice: AuthSlice,
  languageSlice: LanguageSlice,
  address:AddressSlice
});

export default reducer;
