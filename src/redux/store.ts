import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

import reducer from './slices';
import { langReducer } from './slices';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

export const langStore = configureStore({
  reducer: langReducer,
});

sagaMiddleware.run(rootSaga);

export default store;
