import Api from './api.js';

export default {
    RegisterUser(payload) {
        console.log(payload)
        return Api().post(`users/register`, payload);
    },
    VerifyOtp(payload) {
        console.log(payload)
        return Api().post(`/users/verifyUserWithOtp`, payload);
    },
    VerifyOtp(payload) {
        console.log(payload)
        return Api().post(`/users/verifyUserWithOtp`, payload);
    },
    UserLogin(payload) {
        console.log(payload)
        return Api().post(`/users/login`, payload);
    }

};
