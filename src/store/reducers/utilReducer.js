import { CHANGE_DASHBOARD, SET_CURRENT_QUIZ, SET_STUDENT_ID } from 'store/types/utilTypes';

const initialState = {
    _on: 'website',
    student_id: '',
    current_quiz: [],
};

const utilReducer = (state = initialState, action) => {
    switch (action?.type) {
        case CHANGE_DASHBOARD:
            return {
                ...state,
                _on: action?.payload,
            };
        case SET_STUDENT_ID:
            return {
                ...state,
                student_id: action?.payload,
            };
        case SET_CURRENT_QUIZ:
            return {
                ...state,
                current_quiz: action.payload,
            };
        default:
            return state;
    }
};

export default utilReducer;
