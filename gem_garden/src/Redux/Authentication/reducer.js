
import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST } from "./actionTypes"

const initialState = {
    isLoading : false,
    isAuth:false,
    user : [],
    loggedInUsers:[],
    isError : false,
    regMsg : '',
    errMsg:"",
    loginMsg:"",
    isRegistered:false,
    token:"",
    isLogout:false
}

export const reducer = (state=initialState,{type,payload}) => {
  // console.log(payload)
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
            user:payload.user,
            isAuth : false,
            regMsg : payload.msg,
            isRegistered:true

           }
      }

      case AUTH_ERROR : {
        return {
          ...state,
          isLoading : false,
          isError : true,
          isAuth : false,
          errMsg : payload,
          isRegistered : false
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
          isError : false,
          isAuth : true,
          token:payload.token
        }
      }
      case LOGIN_FAILURE : {
        return {
          ...state,
          isLoading : false,
          isError : true,
          isAuth : false,
          errMsg:payload
        }
      }
      case LOGOUT_REQUEST : {
        return {
          ...state,
          isLoading :true,
          isError:false,
          isAuth : false,
        }
      }
      case LOGOUT_FAILURE : {
        return {
          ...state,
          isLoading : false,
          isError : true,
          errMsg : payload,
          isLogout:false
        }
      }
      case AUTH_SUCCESS : {
        return {
         ...state,
         isLoading : false,
         isError : false,
         isLogout:true
        }
   }
      default : {
        return state
      }
    }
}

