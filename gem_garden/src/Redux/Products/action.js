import axios from "axios";
import {
  IsError,
  IsLoading,
  PRODUCT_REQUEST_ARRIVAL,
  PRODUCT_REQUEST_BRACELETS,
  PRODUCT_REQUEST_EARRINGS,
  PRODUCT_REQUEST_RINGS,
  SINGLE_PRODUCT_REQUEST,
  TOTALPAGE,
} from "./actionTypes";

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

//material--Diamond,Pearl.Gold,Gemstone,Solitaire
