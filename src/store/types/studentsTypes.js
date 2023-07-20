//types
export const GET_STUDENTS_REQUEST = 'GET_STUDENTS_REQUEST';
export const GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS';
export const GET_STUDENTS_FAILURE = 'GET_STUDENTS_FAILURE';
export const DELETE_STUDENTS_REQUEST = 'DELETE_STUDENTS_REQUEST';
export const DELETE_STUDENTS_SUCCESS = 'DELETE_STUDENTS_SUCCESS';
export const DELETE_STUDENTS_FAILURE = 'DELETE_STUDENTS_FAILURE';
export const BLOCK_STUDENTS_REQUEST = 'BLOCK_STUDENTS_REQUEST';
export const BLOCK_STUDENTS_SUCCESS = 'BLOCK_STUDENTS_SUCCESS';
export const BLOCK_STUDENTS_FAILURE = 'BLOCK_STUDENTS_FAILURE';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const CLEAR_STUDENTS = 'CLEAR_STUDENTS';
//actions
export const getStudentsRequest = () => {
    return {
        type: GET_STUDENTS_REQUEST
    }
}

export const getStudentsSuccess = (payload) => {
    return {
        type: GET_STUDENTS_SUCCESS,
        payload: payload
    }
}

export const getStudentsFailure = (payload) => {
    return {
        type: GET_STUDENTS_FAILURE,
        payload: payload
    }
}

export const deleteStudentsRequest = () => {
    return {
        type: DELETE_STUDENTS_REQUEST
    }
}

export const deleteStudentsSuccess = (payload) => {
    return {
        type: DELETE_STUDENTS_SUCCESS,
        payload: payload
    }
}

export const deleteStudentsFailure = (payload) => {
    return {
        type: DELETE_STUDENTS_FAILURE,
        payload: payload
    }
}
export const blockStudentsRequest = () => {
    return {
        type: BLOCK_STUDENTS_REQUEST
    }
}

export const blockStudentsSuccess = (payload) => {
    return {
        type: BLOCK_STUDENTS_SUCCESS,
        payload: payload
    }
}

export const blockStudentsFailure = (payload) => {
    return {
        type: BLOCK_STUDENTS_FAILURE,
        payload: payload
    }
}
export const clearError = () => {
    return {
        type: CLEAR_ERROR
    }
}

export const clearStudents = () => {
    return {
        type: CLEAR_STUDENTS
    }
}