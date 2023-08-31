
import axios from 'axios';


import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST } from "./actionTypes";


  export const signup = (formData) => (dispatch) => {
  
      dispatch({ type: AUTH_REQUEST });
 
       axios.post('https://gemgaredenbackenddatamdb.onrender.com/users/register',formData).then((res)=>{
         console.log(res)
         dispatch({type:AUTH_SUCCESS, payload:res.data})
      
      }).catch((err) => {
          if (err.response && err.response.data && err.response.data.msg) {
            // console.log(err.response.data.msg)
            dispatch({ type: AUTH_ERROR, payload: err.response.data.msg });
          } else {
            dispatch({ type: AUTH_ERROR, payload: 'An error occurred.' });
          }
      })
  
  }

  

  export const login = (loginData) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    
 
    axios.post('https://gemgaredenbackenddatamdb.onrender.com/users/login',loginData).then((res)=>{
      // console.log(res)
      dispatch({type:LOGIN_SUCCESS, payload:res.data})
   }).catch((err) => {
      // console.log(err)
      // console.log(err.response.data)
       if (err.response.data) {
         dispatch({ type: LOGIN_FAILURE, payload: err.response.data });
       } else {
         dispatch({ type: LOGIN_FAILURE, payload: 'An error occurred.' });
       }
   })
  };
  

  export const logout = (token) => (dispatch) => {
      dispatch({type:LOGOUT_REQUEST})
     return axios.get('https://gemgaredenbackenddatamdb.onrender.com/users/logout',token).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
  }
  
