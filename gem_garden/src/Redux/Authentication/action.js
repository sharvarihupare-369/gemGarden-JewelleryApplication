import axios from 'axios';

import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS, LOGIN_SUCCESS } from "./actionTypes";


  export const signup = (formData) => async(dispatch) => {

      dispatch({ type: AUTH_REQUEST });
 
       await axios.post('https://gem-garden-backenddata.onrender.com/user',formData).then((res)=>{
        console.log(res)
         dispatch({type:AUTH_SUCCESS, payload:res.data})
    

      }).catch((err) => {
        // setSubmissiondisbled(false)
          dispatch({type:AUTH_ERROR, payload:err.message})
          // console.log(err.message);
      })
  
  }

  
  export const login = (loginData) => (dispatch) => {
  
        dispatch({type:AUTH_REQUEST})
        axios.get(`https://gem-garden-backenddata.onrender.com/user`).then((res)=>{
            // console.log(res)
            res.data.map((el)=>{
               if(el.email == loginData.email && el.password == loginData.password){
                 dispatch({type:LOGIN_SUCCESS, payload:res.data})
               }

             
            })
      })
  }

  
