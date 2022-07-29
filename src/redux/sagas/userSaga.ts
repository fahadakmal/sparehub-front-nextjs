import { call, spawn, all, takeEvery, put } from 'redux-saga/effects';

import { getAllUser, setUsers } from '../slices/userSlice';
const getUserRequest = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	return res.json();
};

function* getUser() {
	const users: Promise<object> = yield call(getUserRequest);
	yield put(setUsers(users));
}

function* callGetUsers() {
	yield takeEvery(getAllUser.type, getUser);
}

export default function* rootSaga() {
	yield all([spawn(callGetUsers)]);
}
