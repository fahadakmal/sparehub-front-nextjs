import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

import reducer from './slices';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer,
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
