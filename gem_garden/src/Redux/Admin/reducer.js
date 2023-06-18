import { ADMIN_LOGIN_FAILURE, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS } from "./actionTypes"


const initialState = {
    isLoading : false,
    isError : false,
    admindata : []
}


export const reducer = (state=initialState,{type,payload}) => {
  
  switch(type){
    case ADMIN_LOGIN_REQUEST : {
       return {
        ...state,
        isLoading : true,
        isError : false
       }
    }
    case ADMIN_LOGIN_SUCCESS : {
      return {
       ...state,
       isLoading : false,
       isError : false,
       admindata : payload
      }
       
   }
   case ADMIN_LOGIN_FAILURE : {
    return {
     ...state,
     isLoading : false,
     isError : true
    }
 }

 default : {
   return state
  }

  }

}

