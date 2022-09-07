import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import addressSaga from './addressSaga';
import sellerSaga from './sellerSaga';
export default function* rootSaga() {
  yield all([authSaga(),addressSaga(),sellerSaga()]);
}
