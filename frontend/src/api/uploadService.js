import Api from "./api.js";

const configHeaders = {
  headers: {
      'content-type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*'
  }
};

export default {
  uploadImage(payload) {
    console.log(payload);
    return Api().post(`upload/uploadImage`, payload, configHeaders);
  },
};
