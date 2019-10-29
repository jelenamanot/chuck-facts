export const ActionTypes = {
    GET_FACTS: 'GET_FACTS',
    SET_FACTS: 'SET_FACTS',
    GET_VIEWED_FACTS: 'GET_VIEWED_FACTS',
    SET_VIEWED_FACTS: 'SET_VIEWED_FACTS',
    SET_FACTS_EMPTY: 'SET_FACTS_EMPTY'
};

export function getFacts(dispatch, query) {
    dispatch({
        type: ActionTypes.GET_FACTS,
        query
    });
}
export function setFactsEmpty(dispatch) {
    dispatch({
        type: ActionTypes.SET_FACTS_EMPTY,
    });
}

export function getViewedFacts(dispatch) {
    dispatch({
        type: ActionTypes.GET_VIEWED_FACTS
    });
}
