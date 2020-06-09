import AsyncStorage from "@react-native-community/async-storage";
import { types } from "../redux/types";

export const setLoginToRedux = (user, dispatch) => {
  console.log("IN SET LOGIN");
  const payload = {
    email: user.email,
    uid: user.uid,
    displayName: user.displayName,
  };
  dispatch({ type: types.LOGIN, payload });

  AsyncStorage.setItem("user", JSON.stringify(payload));
};

export const logoutFromRedux = (dispatch) => {
  dispatch({ type: types.LOGOUT });

  AsyncStorage.removeItem("user");
};
