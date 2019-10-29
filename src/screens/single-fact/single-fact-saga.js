import { takeEvery, put } from 'redux-saga/effects';
/* actions */
import { ActionTypes } from './single-fact-actions';
/* services */
import FactsService from '../../services/facts-service';

function* getSingleFact(action) {
    const activeFact = yield FactsService.getSingle(action.factId);
    if (activeFact) {
        yield put({ type: ActionTypes.SET_SINGLE_FACT, activeFact });
    }
}

export default function* singleFactSaga() {
    yield takeEvery(ActionTypes.GET_SINGLE_FACT, getSingleFact);
}
