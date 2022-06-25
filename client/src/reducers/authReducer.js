import {AUTH_FAILED, AUTH_SUCCESS} from "../actions/authActionTypes"
const initialState = {
  user: null,
  isAuth: false
};

const reducer = (state=initialState, action) => {
  switch(action) {
    case AUTH_SUCCESS: 
      return {
        ...state,
        user: action.payload.user,
        isAuth: true
      }
    case AUTH_FAILED:
      return {
        ...state,
        isAuth:false
      }
    default:
      return state
  }
};

export default reducer;