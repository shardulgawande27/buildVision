import Api from './api.js';

export default {
    RegisterUser(payload) {
        console.log(payload)
        return Api().post(`/register`, payload);
    },
    VerifyOtp(payload) {
        console.log(payload)
        return Api().post(`/verifyUserWithOtp`, payload);
    },
    VerifyOtp(payload) {
        console.log(payload)
        return Api().post(`/verifyUserWithOtp`, payload);
    },
    UserLogin(payload) {
        console.log(payload)
        return Api().post(`/login`, payload);
    },

    GetUserDetails() {
       
        return Api().get(`/users/user-details`);
    },


};
