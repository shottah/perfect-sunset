import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime';
import reducer from './reducer';
import { rootSaga } from './saga'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: reducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);