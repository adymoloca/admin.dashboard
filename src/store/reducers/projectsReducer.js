import {
    GET_PROJECTS_REQUEST,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAILURE,
    GET_PROJECT_REQUEST,
    GET_PROJECT_SUCCESS,
    GET_PROJECT_FAILURE,
    ADD_PROJECTS_REQUEST,
    ADD_PROJECTS_SUCCESS,
    ADD_PROJECTS_FAILURE,
    UPDATE_PROJECTS_REQUEST,
    UPDATE_PROJECTS_SUCCESS,
    UPDATE_PROJECTS_FAILURE,
    DELETE_PROJECTS_REQUEST,
    DELETE_PROJECTS_SUCCESS,
    DELETE_PROJECTS_FAILURE,
    CLEAR_PROJECTS,
    CLEAR_ERROR,
} from "../types/projectsTypes.js";

const initialState = {
    loading: false,
    error: {
        status: false,
        message: "",
    },
    projects: [],
    project: {},
};

const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PROJECTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_PROJECTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                projects: action?.payload?.projects,
            };
        case GET_PROJECTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case GET_PROJECT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                project: action?.payload?.project,
            };
        case GET_PROJECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case ADD_PROJECTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_PROJECTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                projects: action?.payload?.projects,
            };
        case ADD_PROJECTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case UPDATE_PROJECTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_PROJECTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
            };
        case UPDATE_PROJECTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case DELETE_PROJECTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_PROJECTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                // news: action?.payload?.news
            };
        case DELETE_PROJECTS_FAILURE:
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
        case CLEAR_PROJECTS:
            return {
                ...state,
                projects: []
            };
        default:
            return state;
    }
};

export default projectsReducer;
