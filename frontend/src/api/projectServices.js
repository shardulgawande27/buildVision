import Api from "./api.js";

export default {
  addPrroject(payload) {
    console.log(payload);
    return Api().post(`project/postProject`, payload);
  },
};
