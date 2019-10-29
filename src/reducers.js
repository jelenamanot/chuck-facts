
import { combineReducers } from 'redux';
/* reducers */
import factsReducer from './screens/facts/facts-reducer';
import singleFactReducer from './screens/single-fact/single-fact-reducer';

export default combineReducers({
    factsReducer,
    singleFactReducer
});