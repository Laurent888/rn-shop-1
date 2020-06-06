import firebase from "../services/firebase";
import { types } from "../redux/types";

export const setLoginToRedux = (user, dispatch) => {
  console.log("IN SET LOGIN");
  const payload = {
    email: user.email,
    uid: user.uid,
    displayName: user.displayName,
  };
  dispatch({ type: types.LOGIN, payload });
};

export const logoutFromRedux = (dispatch) => {
  dispatch({ type: types.LOGOUT });
};
