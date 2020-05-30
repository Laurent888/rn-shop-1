import { types } from "../types";

const INITIAL_STATE = {
  loading: true,
  men: {
    shoes: [],
  },
  women: {
    shows: [],
  },
  currentProduct: null,
};

const productReducer = (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case types.SET_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        men: {
          shoes: [...action.payload.men.shoes],
        },
        women: {
          shoes: [...action.payload.women.shoes],
        },
      };
    case types.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentProduct: action.payload,
      };

    case types.REMOVE_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: null,
      };
    default:
      return state;
  }
};

export default productReducer;
