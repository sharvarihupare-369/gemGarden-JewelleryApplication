import { ADDTOCART, CART_FAILURE, CART_REQUEST, DELETECART, GETCART, UPDATECART } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  cart: [],
  addcartmsg : "",
  errmsg : ""
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_REQUEST : {
        return {
            ...state,
            isLoading:true,
            isError:false
        }
    }
    case CART_FAILURE : {
        return {
            ...state,
            isLoading:false,
            isError:true,
            errmsg:payload
        }
      };
    case GETCART:
      return {
        ...state,
        isLoading: false,
        isError: false,
        cart: payload,
      };

    case ADDTOCART:
      return {
        ...state,
        isLoading: false,
        isError: false,
        // cart: [...state.cart, action.payload],
        addcartmsg : payload.msg
      };
      
    case DELETECART:
      return {
        ...state,
        isLoading: false,
        isError: false,
        cart: payload,
      };
    // case UPDATECART:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: false,
    //     cart: payload,
    //   };
    default: {
      return state;
    }
  }
};
