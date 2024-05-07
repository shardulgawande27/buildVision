import createAxiosInstance from "../../api/api.js";
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

  // return async (dispatch) => {
  //   const instance = createAxiosInstance();

  //   try {
  //     const response = await instance.post(
  //       "project/postProject",
  //       payload.formData
  //     );

  //     dispatch({
  //       type: PROJECT_FORM_STEPS,
  //       payload: payload.formData,
  //       page: payload.page,
  //     });
  //   } catch (error) {
  //     console.error("Error adding project steps:", error);
  //   }
  // };
};
