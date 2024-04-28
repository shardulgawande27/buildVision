import axios from 'axios';
// import { BASEURL } from "../config/index";
import { TokenService } from "./tokenService";

const BASEURL = 'http://localhost:5000/api/'

const createAxiosInstance = () => {
    const instance = axios.create({
        baseURL: `${BASEURL}`
    })

    const token = TokenService.getToken();
    if (token) {
        instance.defaults.headers.common["Authorization"] = token;
    }
    
    instance.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (error.response && error.response.status === 401) {
            TokenService.removeToken();
        }
        return Promise.reject(error);
    });


    return instance;
}

export default createAxiosInstance;
