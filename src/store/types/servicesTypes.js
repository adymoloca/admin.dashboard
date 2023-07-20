//types
export const GET_SERVICES_REQUEST = 'GET_SERVICES_REQUEST';
export const GET_SERVICES_SUCCESS = 'GET_SERVICES_SUCCESS';
export const GET_SERVICES_FAILURE = 'GET_SERVICES_FAILURE';
export const GET_SERVICE_SUCCESS = 'GET_SERVICE_SUCCESS';
export const GET_SERVICE_FAILURE = 'GET_SERVICE_FAILURE';
export const GET_SERVICE_REQUEST = 'GET_SERVICE_REQUEST';
export const ADD_SERVICES_REQUEST = 'ADD_SERVICES_REQUEST';
export const ADD_SERVICES_SUCCESS = 'ADD_SERVICES_SUCCESS';
export const ADD_SERVICES_FAILURE = 'ADD_SERVICES_FAILURE';
export const UPDATE_SERVICES_REQUEST = 'UPDATE_SERVICES_REQUEST';
export const UPDATE_SERVICES_SUCCESS = 'UPDATE_SERVICES_SUCCESS';
export const UPDATE_SERVICES_FAILURE = 'UPDATE_SERVICES_FAILURE';
export const DELETE_SERVICES_REQUEST = 'DELETE_SERVICES_REQUEST';
export const DELETE_SERVICES_SUCCESS = 'DELETE_SERVICES_SUCCESS';
export const DELETE_SERVICES_FAILURE = 'DELETE_SERVICES_FAILURE';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const CLEAR_SERVICES = 'CLEAR_SERVICES';
//actions
export const getServicesRequest = () => {
    return {
        type: GET_SERVICES_REQUEST
    }
}

export const getServicesSuccess = (payload) => {
    return {
        type: GET_SERVICES_SUCCESS,
        payload: payload
    }
}

export const getServicesFailure = (payload) => {
    return {
        type: GET_SERVICES_FAILURE,
        payload: payload
    }
}

export const getServiceRequest = () => {
    return {
        type: GET_SERVICE_REQUEST
    }
}

export const getServiceSuccess = (payload) => {
    return {
        type: GET_SERVICE_SUCCESS,
        payload: payload
    }
}

export const getServiceFailure = (payload) => {
    return {
        type: GET_SERVICE_FAILURE,
        payload: payload
    }
}

export const addServicesRequest = () => {
    return {
        type: ADD_SERVICES_REQUEST
    }
}

export const addServicesSuccess = (payload) => {
    return {
        type: ADD_SERVICES_SUCCESS,
        payload: payload
    }
}

export const addServicesFailure = (payload) => {
    return {
        type: ADD_SERVICES_FAILURE,
        payload: payload
    }
}

export const updateServicesRequest = () => {
    return {
        type: UPDATE_SERVICES_REQUEST
    }
}

export const updateServicesSuccess = (payload) => {
    return {
        type: UPDATE_SERVICES_SUCCESS,
        payload: payload
    }
}

export const updateServicesFailure = (payload) => {
    return {
        type: UPDATE_SERVICES_FAILURE,
        payload: payload
    }
}

export const deleteServicesRequest = () => {
    return {
        type: DELETE_SERVICES_REQUEST
    }
}

export const deleteServicesSuccess = (payload) => {
    return {
        type: DELETE_SERVICES_SUCCESS,
        payload: payload
    }
}

export const deleteServicesFailure = (payload) => {
    return {
        type: DELETE_SERVICES_FAILURE,
        payload: payload
    }
}

export const clearError = () => {
    return {
        type: CLEAR_ERROR
    }
}

export const clearServices = () => {
    return {
        type: CLEAR_SERVICES
    }
}