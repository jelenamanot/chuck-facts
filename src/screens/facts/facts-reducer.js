import { ActionTypes } from './facts-actions';

const initialState = {
    facts: null,
};

export default function factsReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_FACTS: {
            return {
                ...state,
                facts: action.facts
            };
        }
        default:
            return state;
    }
}
