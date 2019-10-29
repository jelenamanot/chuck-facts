import { takeEvery, put } from 'redux-saga/effects';
/* actions */
import { ActionTypes } from './facts-actions';
/* services */
import FactsService from '../../services/facts-service';

function* getFacts(action) {
    const facts = yield FactsService.get(action.query);
    if (facts) {
        yield put({ type: ActionTypes.SET_FACTS, facts: facts.result });
    }
}

export default function* factsSaga() {
    yield takeEvery(ActionTypes.GET_FACTS, getFacts);
}
