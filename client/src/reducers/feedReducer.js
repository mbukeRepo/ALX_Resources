import {FETCH_FEED_LOADING, FETCH_FEED_SUCCESS,FETCH_SINGLE_SUCCESS, SEARCH_RESOURCE} from "../actions/feedActionTypes"
export const initialState = {
    resources: [],
    resource: null,
    loading: false,
    search: null, 
    pages: 0
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_FEED_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        case FETCH_FEED_SUCCESS:
            let newResources = [...action.payload.feed, ...state.resources];
            return {
                ...state,
                resources: newResources,
                pages: action.payload.pages
            }
        case FETCH_SINGLE_SUCCESS:
            return {
                ...state,
                resource: action.payload.article
            }
        case SEARCH_RESOURCE:
            console.log(action.payload);
            return {
                ...state,
                resources: action.payload.feed
            }
        default:
            return state;
    }
};

export default reducer;

