import {
    FETCH_FEED_LOADING,
    FETCH_FEED_SUCCESS,
    FETCH_SINGLE_SUCCESS,
    SEARCH_RESOURCE
} from "./feedActionTypes";
import axios from "../utils/axios"
const fetchFeedLoading = (loading) => {
    return {
        type: FETCH_FEED_LOADING,
        loading
    }
};
export const setSearch = (search) => {
    return {
        type: SEARCH_RESOURCE,
        search
    }
}
const fetchFeedSuccess = (feed, pages) => {
    return {
        type: FETCH_FEED_SUCCESS,
        payload: {
            feed,
            pages
        }
    }
}
const fetchSingleSuccess = (article) => {
    return {
        type: FETCH_SINGLE_SUCCESS,
        payload: {
            article
        }
    }
}
export const fetchFeed = (search, page) => {
  return async(dispatch) => {
      try {
          dispatch(fetchFeedLoading(true));
          let url = "/resources?";
          if (search){
              url += `search=${search}&`
          }
          url += `page=${page}&limit=5`;
          const feed = await axios.get(url);
          dispatch(fetchFeedSuccess(feed.data.resources, feed.data.pages));
          dispatch(fetchFeedLoading(false));
      } catch (error) {
          dispatch(fetchFeedLoading(false));

      }
  }
};
export const fetchSingle = (id) => {
    
    return async (dispatch) => {
        try {
            dispatch(fetchFeedLoading(true));
            const artice = await axios.get();
            dispatch(fetchSingleSuccess(artice));    
            dispatch(fetchFeedLoading(false));
        } catch (error) {
            dispatch(fetchFeedLoading(false));
        }
        
    }
};

export const searchResource=  (text) => {
    return {
        type: SEARCH_RESOURCE,
        text
    }
} 

export const createFeed = () =>  {

}