import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import sellercountrySaga from './sellercountrySaga';
import sellerStateSaga from './sellerStateSaga';
export default function* rootSaga() {
  yield all([authSaga(), sellercountrySaga(),sellerStateSaga()]);
}
