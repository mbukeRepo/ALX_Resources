import {FETCH_FEED_LOADING, FETCH_FEED_SUCCESS,FETCH_SINGLE_SUCCESS, SEARCH_RESOURCE} from "../actions/feedActionTypes"
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
        case SEARCH_RESOURCE: 
           return {
               ...state,
               resources: state.resources
               .filter(item => {
                   return item.title.toLowerCase().includes(action.text) ||  item.tag.toLowerCase().includes(action.tag)
               })
           }
        default:
            return state;
    }
};

export default reducer;

