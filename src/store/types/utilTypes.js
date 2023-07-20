export const CHANGE_DASHBOARD = 'CHANGE_DASHBOARD';
export const SET_STUDENT_ID = 'SET_STUDENT_ID';
export const SET_CURRENT_QUIZ = 'SET_CURRENT_QUIZ';

export const changeDashboard = (payload) => {
    return {
        type: CHANGE_DASHBOARD,
        payload: payload,
    };
};

export const setStudentId = (payload) => {
    return {
        type: SET_STUDENT_ID,
        payload: payload,
    };
};

export const setCurrentQuiz = (payload) => {
    return {
        type: SET_CURRENT_QUIZ,
        payload: payload,
    };
};
