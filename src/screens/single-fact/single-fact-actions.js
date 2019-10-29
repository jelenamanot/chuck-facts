export const ActionTypes = {
    GET_SINGLE_FACT: 'GET_SINGLE_FACT',
    SET_SINGLE_FACT: 'SET_SINGLE_FACT',
    SET_SINGLE_FACT_EMPTY: 'SET_SINGLE_FACT_EMPTY'
};

export function getSingleFact(dispatch, factId) {
    dispatch({
        type: ActionTypes.GET_SINGLE_FACT,
        factId
    });
}
export function setSingleFactEmpty(dispatch) {
    dispatch({
        type: ActionTypes.SET_SINGLE_FACT_EMPTY
    });
}
