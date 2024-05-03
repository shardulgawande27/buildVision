import Api from "./api.js";

export default {
  uploadImage(payload) {
    console.log(payload);
    return Api().post(`upload/uploadImage`, payload);
  },
};
