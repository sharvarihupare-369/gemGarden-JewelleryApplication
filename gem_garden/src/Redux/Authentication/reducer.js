
import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading : false,
    isAuth:false,
    user : [],
    isError : false
}

export const reducer = (state=initialState,{type,payload}) => {
    switch(type){
      case AUTH_REQUEST : {
        return {
          ...state,
          isLoading :true,
          isError:false,
          isAuth : false,
        }
      }
      case AUTH_SUCCESS : {
           return {
            ...state,
            isLoading : false,
            isError : false,
            isAuth : false,

           }
      }
      case LOGIN_REQUEST : {
        return {
          ...state,
          isLoading : true,
          isError : false,
          isAuth : false
         }
      }
      case LOGIN_SUCCESS : {
        return {
          ...state,
          isLoading : false,
          user:payload,
          isError : false,
          isAuth : true
        }
      }
      case LOGIN_FAILURE : {
        return {
          ...state,
          isLoading : false,
          isError : true,
          isAuth : false
        }
      }

    
      case AUTH_ERROR : {
        return {
          ...state,
          isLoading : false,
          isError : true,
          isAuth : false
        }
      }

      default : {
        return state
      }
    }
}

