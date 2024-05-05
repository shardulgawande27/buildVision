import { FETCH_PROJECT, PROJECT_FORM_STEPS } from "./projectTypes.js";

const initialState = {
  project_form_step_1: null,
  project_form_step_2: null,
  project_form_step_3: null,
  project_form_step_4: null,
  project_form_step_5: null,
  project_form_step_6: null,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    case PROJECT_FORM_STEPS:
      console.log(action.page, "this is action page>>>>>>>>>>>>>>>>>>>");
      switch (action.page) {
        case 1:
          return {
            ...state,
            project_form_step_1: action.payload,
          };
        case 2:
          console.log("this is in the case 2");
          return {
            ...state,
            project_form_step_2: action.payload,
          };
        case 3:
          return {
            ...state,
            project_form_step_3: action.payload,
          };
        case 4:
          return {
            ...state,
            project_form_step_4: action.payload,
          };
        case 5:
          return {
            ...state,
            project_form_step_5: action.payload,
          };
        default:
          return { ...state };
      }

    default:
      return state;
  }
};

export default projectReducer;
