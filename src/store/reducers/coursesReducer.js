import {
    GET_COURSES_REQUEST,
    GET_COURSES_SUCCESS,
    GET_COURSES_FAILURE,
    GET_COURSE_REQUEST,
    GET_COURSE_SUCCESS,
    GET_COURSE_FAILURE,
    ADD_COURSE_REQUEST,
    ADD_COURSE_SUCCESS,
    ADD_COURSE_FAILURE,
    DELETE_COURSE_REQUEST,
    DELETE_COURSE_SUCCESS,
    DELETE_COURSE_FAILURE,
    UPDATE_COURSE_REQUEST,
    UPDATE_COURSE_SUCCESS,
    UPDATE_COURSE_FAILURE,
    CLEAR_ERROR,
} from '../types/coursesTypes';

const initialState = {
    loading: false,
    error: {
        status: false,
        message: '',
    },
    courses: [],
    course: {},
};

const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COURSES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_COURSES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                courses: action?.payload?.courses,
            };
        case GET_COURSES_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case GET_COURSE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                course: action?.payload?.course,
            };
        case GET_COURSE_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case ADD_COURSE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                courses: action?.payload?.courses,
            };
        case ADD_COURSE_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.error,
                },
            };
        case UPDATE_COURSE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
            };
        case UPDATE_COURSE_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case DELETE_COURSE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
            };
        case DELETE_COURSE_FAILURE:
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
        default:
            return state;
    }
};

export default coursesReducer;
