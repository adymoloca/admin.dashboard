import {
    GET_QUIZZES_REQUEST,
    GET_QUIZZES_SUCCESS,
    GET_QUIZZES_FAILURE,
    GET_QUIZ_REQUEST,
    GET_QUIZ_SUCCESS,
    GET_QUIZ_FAILURE,
    GET_SUBMITTED_QUIZZES_REQUEST,
    GET_SUBMITTED_QUIZZES_SUCCESS,
    GET_SUBMITTED_QUIZZES_FAILURE,
    ADD_QUIZZES_REQUEST,
    ADD_QUIZZES_SUCCESS,
    ADD_QUIZZES_FAILURE,
    UPDATE_QUIZZES_REQUEST,
    UPDATE_QUIZZES_SUCCESS,
    UPDATE_QUIZZES_FAILURE,
    DELETE_QUIZZES_REQUEST,
    DELETE_QUIZZES_SUCCESS,
    DELETE_QUIZZES_FAILURE,
    CLEAR_QUIZZES,
    CLEAR_ERROR,
    CORRECT_QUIZ_REQUEST,
    CORRECT_QUIZ_SUCCESS,
    CORRECT_QUIZ_FAILURE,
} from '../types/quizzesTypes.js';

const initialState = {
    loading: false,
    error: {
        status: false,
        message: '',
    },
    quizzes: [],
    submittedQuizzes: [],
    quiz: {},
};

const quizzesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUIZZES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_QUIZZES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                quizzes: action?.payload?.quizzes,
            };
        case GET_QUIZZES_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };

        case GET_SUBMITTED_QUIZZES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_SUBMITTED_QUIZZES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                submittedQuizzes: action?.payload?.quizzesTaken,
            };
        case GET_SUBMITTED_QUIZZES_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case GET_QUIZ_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_QUIZ_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                quiz: action?.payload?.quiz,
            };
        case GET_QUIZ_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case ADD_QUIZZES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case ADD_QUIZZES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                quizzes: action?.payload?.quizzes,
            };
        case ADD_QUIZZES_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case UPDATE_QUIZZES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case UPDATE_QUIZZES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
            };
        case UPDATE_QUIZZES_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case DELETE_QUIZZES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DELETE_QUIZZES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
                // news: action?.payload?.news
            };
        case DELETE_QUIZZES_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    status: true,
                    message: action?.payload?.message,
                },
            };
        case CORRECT_QUIZ_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CORRECT_QUIZ_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    status: false,
                    message: action?.payload?.message,
                },
            };
        case CORRECT_QUIZ_FAILURE:
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
        case CLEAR_QUIZZES:
            return {
                ...state,
                quizzes: [],
            };
        default:
            return state;
    }
};

export default quizzesReducer;
