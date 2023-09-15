
import {
  ADDTOCART,
    DELETECART,
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
  
  // import { isError, isLoading } from "./actionTypes"
  // type statetype={
  //     isLoading: boolean;
  //     isError: boolean;
  //     products:[];
  // }
  const initialState = {
    isLoading: false,
    products: [],
    isError: false,
    singlePageData: {},
    totalpages: "",
    // cart:[]
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case IsLoading:
        return { ...state, isLoading: true, isError: false };
      case IsError:
        return { ...state, isLoading: false, isError: true };
      case TOTALPAGE:
        return { ...state, isLoading: false, totalpages: action.payload };
      case PRODUCT_REQUEST_ARRIVAL:
        return {
          ...state,
          isLoading: false,
          isError: false,
          products: action.payload,
        };
      case PRODUCT_REQUEST_BRACELETS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          products: action.payload,
        };
      case PRODUCT_REQUEST_RINGS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          products: action.payload,
        };
      case PRODUCT_REQUEST_EARRINGS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          products: action.payload,
        };
      case SINGLE_PRODUCT_REQUEST:
        return {
          ...state,
          isLoading: false,
          isError: false,
          singlePageData: action.payload,
        };
        // case GETCART:
        //   return{
        //     ...state,    
        //     isLoading: false,
        //     isError: false,
        //     cart:action.payload
        //   }

        //   case ADDTOCART:
        //     return{
        //       ...state,
        //       isLoading: false,
        //       isError: false,
        //       cart:[...state.cart,action.payload]
        //     }
        //     case DELETECART:
        //       return{
        //         ...state,
        //         isLoading: false,
        //         isError: false,
        //         cart:action.payload
        //       }
        //       case UPDATECART:
        //         return{
        //           ...state,
        //           isLoading: false,
        //           isError: false,
        //           cart:action.payload
        //         }

      default:
        return state;
    }
  };
  