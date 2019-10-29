import { ActionTypes } from './facts-actions';

const initialState = {
    facts: [],
    viewedFacts: []
};

export default function factsReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_FACTS: {
            return {
                ...state,
                facts: action.facts
            };
        }
        case ActionTypes.SET_FACTS_EMPTY: {
            return {
                ...state,
                facts: initialState.facts
            };
        }
        case ActionTypes.SET_VIEWED_FACTS: {
            return {
                ...state,
                viewedFacts: action.viewedFacts
            };
        }
        default:
            return state;
    }
}
