import RootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';
import SellerDrafts from './sagas/SellerDrafts';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ reducer: RootReducer, middleware: () => [sagaMiddleware] });
sagaMiddleware.run(SellerDrafts);
export default store;
