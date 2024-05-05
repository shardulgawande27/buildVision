import { FETCH_USER } from "./userTypes";

//Loading action to set flag true/false
export const fetchUser = () => {
  return {
    type: FETCH_USER,
  };
};
