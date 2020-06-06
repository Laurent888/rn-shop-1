import { types } from "../types";

const INITIAL_STATE = {
  isLoggedIn: false,
  currentUser: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload,
      };
    case types.LOGOUT:
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};

export default authReducer;
