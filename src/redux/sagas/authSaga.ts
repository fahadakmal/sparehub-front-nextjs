import { spawn, all, takeEvery, put } from 'redux-saga/effects';

import {
  registrationRequest,
  registrationSuccess,
  registrationFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
} from '../slices/authSlice';
import { apiPost } from '../../services/index';

type response = {
  error: string;
  message: string;
  statusCode: number;
};

function* registerUser(action: any) {
  try {
    const response: response = yield apiPost('/auth/onSignUp', action.payload, '');
    if (response.error) {
      yield put(registrationFailure(response.message));
    } else {
      yield put(registrationSuccess());
    }
  } catch (error: any) {
    yield put(registrationFailure(error.message));
  }
}

function* loginUser(action: any) {
  try {
    const response: response = yield apiPost('/auth/onLogin', action.payload, '');
    if (response.error) {
      yield put(loginFailure(response.message));
    } else {
      yield put(loginSuccess());
    }
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

function* callRegistrationRequest() {
  yield takeEvery(registrationRequest.type, registerUser);
}

function* callLoginRequest() {
  yield takeEvery(loginRequest.type, loginUser);
}

export default function* rootSaga() {
  yield all([spawn(callRegistrationRequest), spawn(callLoginRequest)]);
}
