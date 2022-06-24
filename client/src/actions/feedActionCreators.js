import {
    FETCH_FEED_LOADING,
    FETCH_FEED_SUCCESS,
    FETCH_SINGLE_SUCCESS
} from "./feedActionTypes";
import axios from "../utils/axios"
const fetchFeedLoading = (loading) => {
    return {
        type: FETCH_FEED_LOADING,
        loading
    }
};
const fetchFeedSuccess = (feed) => {
    return {
        type: FETCH_FEED_SUCCESS,
        payload: {
            feed
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
export const fetchFeed = () => {
  return async(dispatch) => {
      try {
          dispatch(fetchFeedLoading(true));
          const feed = await axios.get();
          dispatch(fetchFeedSuccess(feed));
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