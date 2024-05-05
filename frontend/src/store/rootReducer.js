import { combineReducers } from "redux";
//imports multiple reducer here
import userReducer from "./user/userReducer";
import projectReducer from "./project/projectReducer";

const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
});

export default rootReducer;
