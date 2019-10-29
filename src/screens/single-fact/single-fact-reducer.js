import { ActionTypes } from './single-fact-actions';

const initialState = {
    activeFact: null
};

export default function singleFactReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_SINGLE_FACT: {
            return {
                ...state,
                activeFact: action.activeFact
            };
        }
        case ActionTypes.SET_SINGLE_FACT_EMPTY: {
            return {
                ...state,
                activeFact: initialState.activeFact
            };
        }
        default:
            return state;
    }
}
