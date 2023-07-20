import axios from "axios";
import { adminURL, tokenURL, url } from "./constants";
import store from "store";

const requestWebsite = axios.create({
    baseURL: url,
});

const requestToken = axios.create({
    baseURL: tokenURL,
});

const requestAdmin = axios.create({
    baseURL: adminURL,
});

requestWebsite.interceptors.request.use(function (config) {
    config.headers.contentType = "application/json";

    return config;
});

requestToken.interceptors.request.use(function (config) {
    config.headers.contentType = "application/json";

    return config;
});

requestAdmin.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${
        store.getState().userState?.token
    }`;

    return config;
});

export { requestWebsite, requestToken, requestAdmin };
