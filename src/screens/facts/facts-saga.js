import { takeEvery, put } from 'redux-saga/effects';
/* actions */
import { ActionTypes } from './facts-actions';
/* services */
import FactsService from '../../services/facts-service';

function* getFacts() {
    const facts = yield FactsService.get();
    if (facts) {
        yield put({ type: ActionTypes.SET_FACTS, facts });
    }
}

export default function* factsSaga() {
    yield takeEvery(ActionTypes.GET_FACTS, getFacts);
}
