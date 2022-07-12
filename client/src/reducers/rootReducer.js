import authReducer from "./authReducer";
import feedReducer from "./feedReducer"
export const initialState = {
    auth: { user: null, isAuth: false},
    feed: {
        resources: [],
        resource: null,
        loading: false,
        showSearch: true,
        searching: false
    }
};

const rootReducer = {
    auth: authReducer,
    feed: feedReducer
};

export default rootReducer;
