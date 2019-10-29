import { takeEvery, put } from 'redux-saga/effects';
/* actions */
import { ActionTypes } from './facts-actions';
/* services */
import FactsService from '../../services/facts-service';
/* utils */
import { getItemFromLocalStorage } from '../../utils/info-helper';

function* getFacts(action) {
    const facts = yield FactsService.get(action.query);
    if (facts) {
        yield put({ type: ActionTypes.SET_FACTS, facts: facts.result });
    }
}

function* getViewedFacts() {
    if (getItemFromLocalStorage('viewedFacts') === null) {
        const randomFact = yield FactsService.getRandom();
        if (randomFact) {
            yield put({ type: ActionTypes.SET_VIEWED_FACTS, viewedFacts: [randomFact] });
        }
    } else {
        const viewedFacts = getItemFromLocalStorage('viewedFacts');
        yield put({ type: ActionTypes.SET_VIEWED_FACTS, viewedFacts });
    }
}

export default function* factsSaga() {
    yield takeEvery(ActionTypes.GET_FACTS, getFacts);
    yield takeEvery(ActionTypes.GET_VIEWED_FACTS, getViewedFacts);
}
