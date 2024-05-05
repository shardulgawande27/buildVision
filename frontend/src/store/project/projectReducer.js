import { FETCH_PROJECT } from "./projectTypes.js";

const initialState = {
  project_form_step1: null,
  project_form_step2: null,
  project_form_step3: null,
  project_form_step4: null,
  project_form_step5: null,
  project_form_step6: null,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
