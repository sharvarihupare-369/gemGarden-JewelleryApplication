import axios from "axios";
import {
  GETCART,
  IsError,
  IsLoading,
  PRODUCT_REQUEST_ARRIVAL,
  PRODUCT_REQUEST_BRACELETS,
  PRODUCT_REQUEST_EARRINGS,
  PRODUCT_REQUEST_RINGS,
  SINGLE_PRODUCT_REQUEST,
  TOTALPAGE,
  UPDATECART,
} from "./actionTypes";

const token = localStorage.getItem("user-token") ||  ""

export const getProducts = (obj, page) => (dispatch) => {
  dispatch({ type: IsLoading });
  axios
    .get(
      `https://gemgardenagain.onrender.com/collection?_page=${page}_limit=10`,
      obj
    )
    .then((data) => {
      // console.log(data.headers["x-total-count"])
      dispatch({ type: TOTALPAGE, payload: data.headers["x-total-count"] });
      dispatch({ type: PRODUCT_REQUEST_ARRIVAL, payload: data.data });
    })
    .catch((error) => {
      dispatch({ type: IsError });
    });
};

export const getProductsArrival = () => (dispatch) => {
  dispatch({ type: IsLoading });
  axios
    .get("https://gemgardenagain.onrender.com/arrival")
    .then((data) => {
      dispatch({ type: PRODUCT_REQUEST_ARRIVAL, payload: data.data });
      // console.log(data.data)
    })
    .catch((error) => {
      dispatch({ type: IsError });
    });
};
export const getProductsRings = () => (dispatch) => {
  dispatch({ type: IsLoading });
  axios
    .get("https://gemgardenagain.onrender.com/rings")
    .then((data) => {
      dispatch({ type: PRODUCT_REQUEST_RINGS, payload: data.data });
      // console.log(data.data)
    })
    .catch((error) => {
      dispatch({ type: IsError });
    });
};
export const getProductsEarRings = () => (dispatch) => {
  dispatch({ type: IsLoading });
  axios
    .get("https://gemgardenagain.onrender.com/earrings")
    .then((data) => {
      dispatch({ type: PRODUCT_REQUEST_EARRINGS, payload: data.data });
      // console.log(data.data)
    })
    .catch((error) => {
      dispatch({ type: IsError });
    });
};
export const getProductsBracelets = () => (dispatch) => {
  dispatch({ type: IsLoading });
  axios
    .get("https://gemgardenagain.onrender.com/bracelets")
    .then((data) => {
      dispatch({ type: PRODUCT_REQUEST_BRACELETS, payload: data.data });
      // console.log(data.data)
    })
    .catch((error) => {
      dispatch({ type: IsError });
    });
};
export const getSingleProducts = (id) => (dispatch) => {
  dispatch({ type: IsLoading });
  axios
    .get(`https://gemgardenagain.onrender.com/collection/${id}`)
    .then((data) => {
      dispatch({ type: SINGLE_PRODUCT_REQUEST, payload: data.data });
      // console.log(data.data)
    })
    .catch((error) => {
      dispatch({ type: IsError });
    });
};




export const getCartProducts = (token) => (dispatch) => {
  dispatch({ type: IsLoading });
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
      dispatch({ type: IsError });
    });
};

export const updateCartProduct = (token, productId, quantity) => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  
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
      dispatch({ type: IsError });
    });
};



export const addToCartProduct = (token, productId, quantity) => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  
  axios
    .post(
      `https://gemgaredenbackenddatamdb.onrender.com/cart`,
      { productId, quantity },
      { headers }
    )
    .then((response) => {
      const data = response.data;
      dispatch({ type: ADDTOCART, payload: data });
    })
    .catch((error) => {
      dispatch({ type: IsError });
    });
};

export const deleteCartProduct = (token, productId) => (dispatch) => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  
  axios
    .delete(`https://gemgaredenbackenddatamdb.onrender.com/cart/${productId}`, {
      headers
    })
    .then((response) => {
      const data = response.data;
      dispatch({ type: DELETECART, payload: data });
    })
    .catch((error) => {
      dispatch({ type: IsError });
    });
};

//material--Diamond,Pearl.Gold,Gemstone,Solitaire
