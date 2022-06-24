import axios from "../utils/axios";
import {AUTH_SUCCESS, AUTH_FAILED} from "./authActionTypes";
export const authFailed = () => {
    return {
        type: AUTH_FAILED
    }
}
const authSuccess = (user) => {
    return {
        type: AUTH_SUCCESS,
        payload: {
            user
        }
    }
}
export const authenticate = () => {
    return async(dispatch) => {
        try {
            const user = await axios.get("/auth/login/success");
            dispatch(authSuccess(user));    
        } catch (error) {
            dispatch(authFailed());             
        }
        
    }
}