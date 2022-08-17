import { createSlice } from '@reduxjs/toolkit';

const LanguageSlice = createSlice({
  name: 'Language Slice',
  initialState: {
    language: 'en',
  },
  reducers: {
    handleChangeLanguage(state, action) {
      console.log(action.payload, 'Language');
      return { ...state, language: action.payload };
    },
  },
});
export const { handleChangeLanguage } = LanguageSlice.actions;
export default LanguageSlice.reducer;
