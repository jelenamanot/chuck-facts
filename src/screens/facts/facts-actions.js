export const ActionTypes = {
    GET_FACTS: 'GET_FACTS',
    SET_FACTS: 'SET_FACTS',
    GET_RANDOM_FACTS: 'GET_RANDOM_FACTS',
};

export function getFacts(dispatch, query) {
    dispatch({
        type: ActionTypes.GET_FACTS,
        query
    });
}

export function getRandomFacts(dispatch) {
    dispatch({
        type: ActionTypes.GET_RANDOM_FACTS
    });
}
