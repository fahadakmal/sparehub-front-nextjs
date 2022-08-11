import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'Auth Slice',
  initialState: {
    awsUserName: '',
    email: '',
    phoneNumber: '',
    isFetching: false,
    isPending: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    registrationData: {},
    loginData: {},
  },
  reducers: {
    registrationRequest(state, action) {
      const signupData = action.payload;
      return { ...state, registrationData: signupData, isPending: true };
    },
    registrationSuccess(state) {
      return { ...state, isSuccess: true, isPending: false };
    },
    registrationFailure(state, action) {
      return { ...state, isError: true, errorMessage: action.payload, isPending: false };
    },
    loginRequest(state, action) {
      const loginData = action.payload;
      return { ...state, loginData: loginData, isPending: true };
    },
    loginSuccess(state) {
      return { ...state, isSuccess: true, isPending: false };
    },
    loginFailure(state, action) {
      return { ...state, isError: true, errorMessage: action.payload, isPending: false };
    },
  },
});

export const {
  registrationRequest,
  registrationSuccess,
  registrationFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
} = AuthSlice.actions;
export default AuthSlice.reducer;
