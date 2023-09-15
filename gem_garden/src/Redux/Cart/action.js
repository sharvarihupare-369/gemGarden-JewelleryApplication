import axios from "axios";
import { ADDTOCART, CART_FAILURE, CART_REQUEST, DELETECART, GETCART, UPDATECART } from "./actionTypes";


export const addToCartProduct = (token, payload) => (dispatch) => {
    // console.log(token)
    // const headers = {
    //   Authorization: `Bearer ${token}`,
    // };
    dispatch({type:CART_REQUEST})
    return axios
      .post(
        `https://gemgaredenbackenddatamdb.onrender.com/cart/addtocart`,
         payload,{
            headers : {
                Authorization: `Bearer ${token}`,
            }
         }
       
      )
      .then((response) => {
        // const data = response.data;
        // console.log(response)
        dispatch({ type: ADDTOCART, payload: response.data });
      })
      .catch((error) => {
        // console.log(error)
        dispatch({ type: CART_FAILURE , payload:error.response.data.msg});
      });
  };
  


export const getCartProducts = (token) => (dispatch) => {
    dispatch({ type: CART_REQUEST });
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios
      .get(`https://gemgaredenbackenddatamdb.onrender.com/cart`, {
        headers,
      })
      .then((response) => {
        const data = response.data;
        dispatch({ type: GETCART, payload: data });
      })
      .catch((error) => {
        dispatch({ type: CART_FAILURE });
      });
  };
  
  export const updateCartProduct = (token, productId, quantity) => (dispatch) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    dispatch({type:CART_REQUEST})
    axios
      .put(
        `https://gemgaredenbackenddatamdb.onrender.com/cart/update/${productId}`,
        { quantity },
        { headers }
      )
      .then((response) => {
        const data = response.data;
        dispatch({ type: UPDATECART, payload: data });
      })
      .catch((error) => {
        dispatch({ type: CART_FAILURE });
      });
  };
  
  
  
 
  export const deleteCartProduct = (token, productId) => (dispatch) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    dispatch({type:CART_REQUEST})
    axios
      .delete(`https://gemgaredenbackenddatamdb.onrender.com/cart/${productId}`, {
        headers
      })
      .then((response) => {
        const data = response.data;
        dispatch({ type: DELETECART, payload: data });
      })
      .catch((error) => {
        dispatch({ type:CART_FAILURE  });
      });
  };