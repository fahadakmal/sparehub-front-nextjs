import { spawn, all, takeEvery, put } from 'redux-saga/effects';

import { registrationRequest, registrationSuccess, registrationFailure } from '../slices/authSlice';
import { apiPost } from '../../services/index';

type response = {
  error: string;
  message: string;
  statusCode: number;
};

function* registerUser(action: any) {
  try {
    const response: response = yield apiPost('/auth/onSignUp', action.payload, '');
    console.log(response, 'response');
    if (response.error) {
      yield put(registrationFailure({ message: response.message }));
    } else {
      yield put(registrationSuccess());
    }
  } catch (error: any) {
    console.log(error, 'error');
    yield put(registrationFailure(error.message));
  }
}

function* callRegistrationRequest() {
  console.log('callRegistrationRequest');
  yield takeEvery(registrationRequest.type, registerUser);
}

export default function* rootSaga() {
  yield all([spawn(callRegistrationRequest)]);
}
