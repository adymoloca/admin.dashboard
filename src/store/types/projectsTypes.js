//types
export const GET_PROJECTS_REQUEST = 'GET_PROJECTS_REQUEST';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAILURE = 'GET_PROJECT_FAILURE';
export const GET_PROJECT_REQUEST = 'GET_PROJECT_REQUEST';
export const ADD_PROJECTS_REQUEST = 'ADD_PROJECTS_REQUEST';
export const ADD_PROJECTS_SUCCESS = 'ADD_PROJECTS_SUCCESS';
export const ADD_PROJECTS_FAILURE = 'ADD_PROJECTS_FAILURE';
export const UPDATE_PROJECTS_REQUEST = 'UPDATE_PROJECTS_REQUEST';
export const UPDATE_PROJECTS_SUCCESS = 'UPDATE_PROJECTS_SUCCESS';
export const UPDATE_PROJECTS_FAILURE = 'UPDATE_PROJECTS_FAILURE';
export const DELETE_PROJECTS_REQUEST = 'DELETE_PROJECTS_REQUEST';
export const DELETE_PROJECTS_SUCCESS = 'DELETE_PROJECTS_SUCCESS';
export const DELETE_PROJECTS_FAILURE = 'DELETE_PROJECTS_FAILURE';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const CLEAR_PROJECTS = 'CLEAR_PROJECTS';

//actions
export const getProjectsRequest = () => {
    return {
        type: GET_PROJECTS_REQUEST
    }
}

export const getProjectsSuccess = (payload) => {
    return {
        type: GET_PROJECTS_SUCCESS,
        payload: payload
    }
}

export const getProjectsFailure = (payload) => {
    return {
        type: GET_PROJECTS_FAILURE,
        payload: payload
    }
}

export const getProjectRequest = () => {
    return {
        type: GET_PROJECT_REQUEST
    }
}

export const getProjectSuccess = (payload) => {
    return {
        type: GET_PROJECT_SUCCESS,
        payload: payload
    }
}

export const getProjectFailure = (payload) => {
    return {
        type: GET_PROJECT_FAILURE,
        payload: payload
    }
}

export const addProjectsRequest = () => {
    return {
        type: ADD_PROJECTS_REQUEST
    }
}

export const addProjectsSuccess = (payload) => {
    return {
        type: ADD_PROJECTS_SUCCESS,
        payload: payload
    }
}

export const addProjectsFailure = (payload) => {
    return {
        type: ADD_PROJECTS_FAILURE,
        payload: payload
    }
}

export const updateProjectsRequest = () => {
    return {
        type: UPDATE_PROJECTS_REQUEST
    }
}

export const updateProjectsSuccess = (payload) => {
    return {
        type: UPDATE_PROJECTS_SUCCESS,
        payload: payload
    }
}

export const updateProjectsFailure = (payload) => {
    return {
        type: UPDATE_PROJECTS_FAILURE,
        payload: payload
    }
}

export const deleteProjectsRequest = () => {
    return {
        type: DELETE_PROJECTS_REQUEST
    }
}

export const deleteProjectsSuccess = (payload) => {
    return {
        type: DELETE_PROJECTS_SUCCESS,
        payload: payload
    }
}

export const deleteProjectsFailure = (payload) => {
    return {
        type: DELETE_PROJECTS_FAILURE,
        payload: payload
    }
}

export const clearError = () => {
    return {
        type: CLEAR_ERROR
    }
}

export const clearProjects = () => {
    return {
        type: CLEAR_PROJECTS
    }
}