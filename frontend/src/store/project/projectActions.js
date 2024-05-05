import { FETCH_PROJECT } from "./projectTypes.js";

export const fetchProject = () => {
  return {
    type: FETCH_PROJECT,
  };
};
