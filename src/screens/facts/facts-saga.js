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

function* getViewedFacts() {
    if (localStorage.getItem('viewedFacts') === null) {
        const randomFact = yield FactsService.getRandom();
        if (randomFact) {
            yield put({ type: ActionTypes.SET_VIEWED_FACTS, viewedFacts: [randomFact] });
        }
    } else {
        const viewedFacts = localStorage.getItem('viewedFacts');
        yield put({ type: ActionTypes.SET_VIEWED_FACTS, viewedFacts: JSON.parse(viewedFacts)});
    }
}

export default function* factsSaga() {
    yield takeEvery(ActionTypes.GET_FACTS, getFacts);
    yield takeEvery(ActionTypes.GET_VIEWED_FACTS, getViewedFacts);
}
