import { FETCH_PROJECT, PROJECT_FORM_STEPS } from "./projectTypes.js";

export const fetchProject = () => {
  return {
    type: FETCH_PROJECT,
  };
};

export const addProjectSteps = (payload) => {
  return {
    type: PROJECT_FORM_STEPS,
    payload: payload.formData,
    page: payload.page,
  };
};
