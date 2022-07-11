import {
    CREATE_FEED,
    FETCH_FEED_LOADING,
    FETCH_FEED_SUCCESS,
    FETCH_SINGLE_SUCCESS,
    SAVE_FEED,
    SEARCH_RESOURCE,
    SET_PAGE
} from "./feedActionTypes";
import axios from "../utils/axios"
const fetchFeedLoading = (loading) => {
    return {
        type: FETCH_FEED_LOADING,
        loading
    }
};
export const setSearch = (feed) => {
    const data = localStorage.getItem("feed");
    const saved = JSON.parse(data).map(item => item._id);
    let newFeed = feed.map((item) => {
        if (saved.includes(item._id)){
            return {
                ...item,
                saved: true
            }
        }
        return {
            ...item
        }
    })
    return {
        type: SEARCH_RESOURCE,
        payload: {
            feed: newFeed
        }
    }
}
const fetchFeedSuccess = (feed, pages) => {
    const data = localStorage.getItem("feed");
    const saved = JSON.parse(data).map(item => item._id);
    let newFeed = feed.map((item) => {
        if (saved.includes(item._id)){
            return {
                ...item,
                saved: true
            }
        }
        return {
            ...item
        }
    })
    return {
        type: FETCH_FEED_SUCCESS,
        payload: {
            feed:newFeed,
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
              url += `search=${search}`
              const feed = await axios.get(url);
              dispatch(setSearch(feed.data.resources));
          }
          else {
            url += `page=${page}&limit=4`;
            const feed = await axios.get(url);
            dispatch(fetchFeedSuccess(feed.data.resources, feed.data.pages));
          }
          
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

export const createFeed = data => {
    return {
        type: CREATE_FEED,
        data
    }
}

export const saveFeed = (id) => {
    return {
       type: SAVE_FEED,
       id 
    }
}
export const setPage = page => {
    return {
        type: SET_PAGE 
    }
}

