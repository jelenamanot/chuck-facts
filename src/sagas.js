import { all } from 'redux-saga/effects';
/* sagas */
import factsSaga from './screens/facts/facts-saga';

export default function* rootSaga() {
    yield all([
        factsSaga()
    ]);
};