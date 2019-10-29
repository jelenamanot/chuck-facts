import { all } from 'redux-saga/effects';
/* sagas */
import factsSaga from './screens/facts/facts-saga';
import singleFactSaga from './screens/single-fact/single-fact-saga';

export default function* rootSaga() {
    yield all([
        factsSaga(),
        singleFactSaga()
    ]);
};