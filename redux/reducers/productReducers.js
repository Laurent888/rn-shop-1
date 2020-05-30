import { types } from "../types";

const INITIAL_STATE = {
  loading: true,
  men: {
    shoes: [],
  },
  women: {
    shows: [],
  },
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default productReducer;
