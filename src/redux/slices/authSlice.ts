import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'Auth Slice',
  initialState: {
    awsUserName: '',
    email: '',
    phoneNumber: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    registrationData: {},
  },
  reducers: {
    registrationRequest(state, action) {
      console.log('🚀 ~ file: authSlice.ts ~ line 17 ~ registrationRequest ~ action', action);

      const signupData = action.payload;
      return { ...state, registrationData: signupData };
    },
    registrationSuccess(state) {
      return { ...state, isSuccess: true };
    },
    registrationFailure(state, action) {
      console.log('🚀 ~ file: authSlice.ts ~ line 26 ~ registrationFailure ~ action', action);
      return { ...state, isError: true, errorMessage: action.payload };
    },
  },
});

export const { registrationRequest, registrationSuccess, registrationFailure } = AuthSlice.actions;
export default AuthSlice.reducer;
