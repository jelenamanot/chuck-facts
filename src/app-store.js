import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
/* reducers */
import reducers from './reducers.js';
/* sagas */
import rootSaga from './sagas.js';

const appReducer = (state, action) => {
    return reducers(state, action);
};

const sagaMiddleware = createSagaMiddleware();
let enhancer = applyMiddleware(sagaMiddleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
enhancer = composeEnhancers(enhancer);

const store = createStore(
    appReducer,
    enhancer
);

sagaMiddleware.run(rootSaga);

export default store;