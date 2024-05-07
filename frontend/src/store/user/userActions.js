import { FETCH_USER, LOGIN_USER } from "./userTypes";

//Loading action to set flag true/false
export const fetchUser = () => {
  return {
    type: FETCH_USER,
  };
};


export const login = (payload) => {
  return {
    type: LOGIN_USER,
    payload
  };
};
