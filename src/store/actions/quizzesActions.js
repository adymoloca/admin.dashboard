import { requestAdmin } from 'utils/axios/axios-config';
import {
    getQuizzesRequest,
    getQuizzesSuccess,
    getQuizzesFailure,
    getSubmittedQuizzesRequest,
    getSubmittedQuizzesSuccess,
    getSubmittedQuizzesFailure,
    addQuizzesRequest,
    addQuizzesSuccess,
    addQuizzesFailure,
    deleteQuizzesRequest,
    deleteQuizzesSuccess,
    deleteQuizzesFailure,
    getQuizRequest,
    getQuizSuccess,
    getQuizFailure,
    updateQuizzesRequest,
    updateQuizzesSuccess,
    updateQuizzesFailure,
    correctQuizRequest,
    correctQuizSuccess,
    correctQuizFailure,
} from 'store/types/quizzesTypes';

export const getQuizzes = (onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(getQuizzesRequest());
        requestAdmin
            .get('get-quizzes/all')
            .then((res) => {
                const data = res?.data;
                dispatch(getQuizzesSuccess(data));
            })
            .catch((err) => {
                const data = err?.data;
                dispatch(getQuizzesFailure(data));
            })
            .finally(() => onFinish());
    };
};

export const getSubmittedQuizzes = (studentId, onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(getSubmittedQuizzesRequest());
        requestAdmin
            .get(`students/${studentId}/quizzes/all`)
            .then((res) => {
                const data = res?.data;
                dispatch(getSubmittedQuizzesSuccess(data));
            })
            .catch((err) => {
                const data = err?.data;
                dispatch(getSubmittedQuizzesFailure(data));
            })
            .finally(() => onFinish());
    };
};

export const getQuiz = (_id, onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(getQuizRequest());
        requestAdmin
            .get(`get-quizzes/${_id}`)
            .then((res) => {
                const data = res?.data;
                dispatch(getQuizSuccess(data));
            })
            .catch((err) => {
                const data = err?.data;
                dispatch(getQuizFailure(data));
            })
            .finally(() => onFinish());
    };
};

export const addQuiz = (data, onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(addQuizzesRequest());
        requestAdmin
            .post('add-quiz', data)
            .then((res) => {
                const data = res?.data;
                dispatch(addQuizzesSuccess(data));
            })
            .catch((err) => {
                const data = err?.data;
                dispatch(addQuizzesFailure(data));
            })
            .finally(() => onFinish());
    };
};

export const updateQuiz = (data, onFinish = () => undefined) => {
    const { _id, __v, updatedAt, createdAt, ...payload } = data;
    return (dispatch) => {
        dispatch(updateQuizzesRequest());
        requestAdmin
            .patch(`update-quiz`, { ...payload, quizId: _id })
            .then((res) => {
                const data = res?.data;
                dispatch(updateQuizzesSuccess(data));
            })
            .catch((err) => {
                const data = err?.data;
                dispatch(updateQuizzesFailure(data));
            })
            .finally(() => onFinish());
    };
};

export const deleteQuiz = (quizId, onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(deleteQuizzesRequest());
        requestAdmin
            .delete(`delete-quiz/${quizId}`)
            .then((res) => {
                const data = res?.data;
                dispatch(deleteQuizzesSuccess(data));
            })
            .catch((err) => {
                const data = err?.data;
                dispatch(deleteQuizzesFailure(data));
            })
            .finally(() => {
                onFinish();
                dispatch(getQuizzes());
            });
    };
};

export const correctQuiz = (answers, onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(correctQuizRequest());
        requestAdmin
            .patch('/correct-quiz', { answers: answers })
            .then((res) => {
                const data = res?.data;
                dispatch(correctQuizSuccess(data));
            })
            .catch((err) => {
                const data = err?.response?.data;
                dispatch(correctQuizFailure(data));
            })
            .finally(() => {
                onFinish();
            });
    };
};
