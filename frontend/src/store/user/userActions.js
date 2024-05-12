import { FETCH_USER, LOGIN_USER, VERIFY_USER } from "./userTypes";

//Loading action to set flag true/false
export const fetchUser = (payload) => {
  return {
    type: FETCH_USER,
    payload
  };
};


export const login = (payload) => {
  return {
    type: LOGIN_USER,
    payload
  };
};


export const verifyUser = (payload) => {
  return {
    type: VERIFY_USER,
    payload
  };
};
