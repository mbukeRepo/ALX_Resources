import {FETCH_FEED_LOADING, FETCH_FEED_SUCCESS,FETCH_SINGLE_SUCCESS, fe} from "../actions/feedActionTypes"
export const initialState = {
    resources: [],
    resource: null,
    loading: false
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_FEED_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case FETCH_FEED_SUCCESS:
            return {
                ...state,
                resources: action.payload.feed
            }
        case FETCH_SINGLE_SUCCESS:
            return {
                ...state,
                resource: action.payload.article
            }
        default:
            return state;
    }
};

export default reducer;
