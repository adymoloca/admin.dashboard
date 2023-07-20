export const GET_QUIZZES_REQUEST = 'GET_QUIZZES_REQUEST';
export const GET_QUIZZES_SUCCESS = 'GET_QUIZZES_SUCCESS';
export const GET_QUIZZES_FAILURE = 'GET_QUIZZES_FAILURE';
export const GET_QUIZ_SUCCESS = 'GET_QUIZ_SUCCESS';
export const GET_QUIZ_FAILURE = 'GET_QUIZ_FAILURE';
export const GET_QUIZ_REQUEST = 'GET_QUIZ_REQUEST';
export const GET_SUBMITTED_QUIZZES_REQUEST = 'GET_SUBMITTED_QUIZZES_REQUEST';
export const GET_SUBMITTED_QUIZZES_SUCCESS = 'GET_SUBMITTED_QUIZZES_SUCCESS';
export const GET_SUBMITTED_QUIZZES_FAILURE = 'GET_SUBMITTED_QUIZZES_FAILURE';
export const ADD_QUIZZES_REQUEST = 'ADD_QUIZZES_REQUEST';
export const ADD_QUIZZES_SUCCESS = 'ADD_QUIZZES_SUCCESS';
export const ADD_QUIZZES_FAILURE = 'ADD_QUIZZES_FAILURE';
export const UPDATE_QUIZZES_REQUEST = 'UPDATE_QUIZZES_REQUEST';
export const UPDATE_QUIZZES_SUCCESS = 'UPDATE_QUIZZES_SUCCESS';
export const UPDATE_QUIZZES_FAILURE = 'UPDATE_QUIZZES_FAILURE';
export const DELETE_QUIZZES_REQUEST = 'DELETE_QUIZZES_REQUEST';
export const DELETE_QUIZZES_SUCCESS = 'DELETE_QUIZZES_SUCCESS';
export const DELETE_QUIZZES_FAILURE = 'DELETE_QUIZZES_FAILURE';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const CLEAR_QUIZZES = 'CLEAR_QUIZZES';
export const CORRECT_QUIZ_SUCCESS = 'CORRECT_QUIZ_SUCCESS';
export const CORRECT_QUIZ_FAILURE = 'CORRECT_QUIZ_FAILURE';
export const CORRECT_QUIZ_REQUEST = 'CORRECT_QUIZ_REQUEST';

//actions
export const getQuizzesRequest = () => {
    return {
        type: GET_QUIZZES_REQUEST,
    };
};

export const getQuizzesSuccess = (payload) => {
    return {
        type: GET_QUIZZES_SUCCESS,
        payload: payload,
    };
};

export const getQuizzesFailure = (payload) => {
    return {
        type: GET_QUIZZES_FAILURE,
        payload: payload,
    };
};

export const getSubmittedQuizzesRequest = () => {
    return {
        type: GET_SUBMITTED_QUIZZES_REQUEST,
    };
};

export const getSubmittedQuizzesSuccess = (payload) => {
    return {
        type: GET_SUBMITTED_QUIZZES_SUCCESS,
        payload: payload,
    };
};

export const getSubmittedQuizzesFailure = (payload) => {
    return {
        type: GET_SUBMITTED_QUIZZES_FAILURE,
        payload: payload,
    };
};

export const getQuizRequest = () => {
    return {
        type: GET_QUIZ_REQUEST,
    };
};

export const getQuizSuccess = (payload) => {
    return {
        type: GET_QUIZ_SUCCESS,
        payload: payload,
    };
};

export const getQuizFailure = (payload) => {
    return {
        type: GET_QUIZ_FAILURE,
        payload: payload,
    };
};

export const getCompletedQuizRequest = () => {
    return {
        type: GET_QUIZ_REQUEST,
    };
};

export const getCompletedQuizSuccess = (payload) => {
    return {
        type: GET_QUIZ_SUCCESS,
        payload: payload,
    };
};

export const getCompletedQuizFailure = (payload) => {
    return {
        type: GET_QUIZ_FAILURE,
        payload: payload,
    };
};

export const addQuizzesRequest = () => {
    return {
        type: ADD_QUIZZES_REQUEST,
    };
};

export const addQuizzesSuccess = (payload) => {
    return {
        type: ADD_QUIZZES_SUCCESS,
        payload: payload,
    };
};

export const addQuizzesFailure = (payload) => {
    return {
        type: ADD_QUIZZES_FAILURE,
        payload: payload,
    };
};

export const updateQuizzesRequest = () => {
    return {
        type: UPDATE_QUIZZES_REQUEST,
    };
};

export const updateQuizzesSuccess = (payload) => {
    return {
        type: UPDATE_QUIZZES_SUCCESS,
        payload: payload,
    };
};

export const updateQuizzesFailure = (payload) => {
    return {
        type: UPDATE_QUIZZES_FAILURE,
        payload: payload,
    };
};

export const deleteQuizzesRequest = () => {
    return {
        type: DELETE_QUIZZES_REQUEST,
    };
};

export const deleteQuizzesSuccess = (payload) => {
    return {
        type: DELETE_QUIZZES_SUCCESS,
        payload: payload,
    };
};

export const deleteQuizzesFailure = (payload) => {
    return {
        type: DELETE_QUIZZES_FAILURE,
        payload: payload,
    };
};

export const clearError = () => {
    return {
        type: CLEAR_ERROR,
    };
};

export const clearQuizzes = () => {
    return {
        type: CLEAR_QUIZZES,
    };
};

export const correctQuizRequest = () => {
    return {
        type: CORRECT_QUIZ_REQUEST,
    };
};

export const correctQuizSuccess = (payload) => {
    return {
        type: CORRECT_QUIZ_SUCCESS,
        payload: payload,
    };
};

export const correctQuizFailure = (payload) => {
    return {
        type: CORRECT_QUIZ_FAILURE,
        payload: payload,
    };
};
