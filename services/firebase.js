import * as firebase from "firebase";

import { config } from "../config";

export const firebaseConfig = {
  ...config,
};
// Initialize Firebase
export default firebase;
