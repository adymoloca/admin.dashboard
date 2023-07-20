import {
    GET_SERVICES_REQUEST,
    GET_SERVICES_SUCCESS,
    GET_SERVICES_FAILURE,
    GET_SERVICE_REQUEST,
    GET_SERVICE_SUCCESS,
    GET_SERVICE_FAILURE,
    ADD_SERVICES_REQUEST,
    ADD_SERVICES_SUCCESS,
    ADD_SERVICES_FAILURE,
    UPDATE_SERVICES_REQUEST,
    UPDATE_SERVICES_SUCCESS,
    UPDATE_SERVICES_FAILURE,
    DELETE_SERVICES_REQUEST,
    DELETE_SERVICES_SUCCESS,
    DELETE_SERVICES_FAILURE,
    CLEAR_SERVICES,
    CLEAR_ERROR,
} from "../types/servicesTypes.js";

const initialState = {
    loading: false,
    error: {
        status: false,
        message: "",
    },
    services: [],
    service: {},
};

const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVICES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_SERVICES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                services: action?.payload?.services,
            };
        case GET_SERVICES_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case GET_SERVICE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_SERVICE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                service: action?.payload?.service,
            };
        case GET_SERVICE_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case ADD_SERVICES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_SERVICES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                services: action?.payload?.services,
            };
        case ADD_SERVICES_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case UPDATE_SERVICES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_SERVICES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
            };
        case UPDATE_SERVICES_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case DELETE_SERVICES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_SERVICES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                // news: action?.payload?.news
            };
        case DELETE_SERVICES_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: { ...initialState.error },
            };
        case CLEAR_SERVICES:
            return {
                ...state,
                services: []
            };
        default:
            return state;
    }
};

export default servicesReducer;
