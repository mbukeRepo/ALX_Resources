import {
    CREATE_FEED, 
    FETCH_FEED_LOADING, 
    FETCH_FEED_SUCCESS,
    FETCH_SINGLE_SUCCESS, 
    SAVE_FEED, 
    SEARCH_RESOURCE, 
    CLEAR_FEED} from "../actions/feedActionTypes"
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
            let newResources = state.resources.concat(action.payload.feed);
            return {
                ...state,
                resources: newResources,
                pages: action.payload.pages
            }
        case CREATE_FEED:
            const newCreatedResources = [...state.resources];
            newCreatedResources.unshift(action.data);
            return {
                ...state,
                resources: newCreatedResources
            }
        case FETCH_SINGLE_SUCCESS:
            return {
                ...state,
                resource: action.payload.article
            }
        case SEARCH_RESOURCE:
            return {
                ...state,
                resources: action.payload.feed
            }
        case SAVE_FEED:
           { 
            const newResources = state.resources.map(item => {
               if (item._id === action.id){
                 return {
                    ...item,
                    saved: true
                }
               }
                 
               return item;
            });
            return {
                ...state,
                resources: newResources
            }}
        case CLEAR_FEED: 
         return {
             ...state,
             resources: []
         }
        default:
            return state;
    }
};

export default reducer;

