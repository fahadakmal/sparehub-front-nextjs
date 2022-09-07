import { combineReducers } from '@reduxjs/toolkit';
import AddressSlice from './addressSlice';
import AuthSlice from './authSlice';
import LanguageSlice from './languageSlice';
import sellerSlice from './sellerSlice';

const reducer = combineReducers({
  authSlice: AuthSlice,
  languageSlice: LanguageSlice,
  address:AddressSlice,
  seller:sellerSlice
});
export const langReducer = combineReducers({
  langSlice: LanguageSlice,
});
export default reducer;
