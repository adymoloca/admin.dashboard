import {
    GET_APPLIERS_REQUEST,
    GET_APPLIERS_SUCCESS,
    GET_APPLIERS_FAILURE,
    UPDATE_APPLIER_REQUEST,
    UPDATE_APPLIER_SUCCESS,
    UPDATE_APPLIER_FAILURE,
    CLEAR_APPLIERS,
    CLEAR_ERROR,
} from '../types/appliersTypes.js';

const initialState = {
    loading: false,
    error: {
        status: false,
        message: '',
    },
    appliers: [],
};

const appliersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_APPLIERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_APPLIERS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                appliers: action?.payload?.applicants,
            };
        case GET_APPLIERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case UPDATE_APPLIER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_APPLIER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
            };
        case UPDATE_APPLIER_FAILURE:
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
        case CLEAR_APPLIERS:
            return {
                ...state,
                appliers: [],
            };
        default:
            return state;
    }
};

export default appliersReducer;
