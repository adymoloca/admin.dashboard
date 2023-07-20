//types
export const GET_APPLIERS_REQUEST = 'GET_APPLIERS_REQUEST';
export const GET_APPLIERS_SUCCESS = 'GET_APPLIERS_SUCCESS';
export const GET_APPLIERS_FAILURE = 'GET_APPLIERS_FAILURE';
export const UPDATE_APPLIER_REQUEST = 'UPDATE_APPLIER_REQUEST';
export const UPDATE_APPLIER_SUCCESS = 'UPDATE_APPLIER_SUCCESS';
export const UPDATE_APPLIER_FAILURE = 'UPDATE_APPLIER_FAILURE';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const CLEAR_APPLIERS = 'CLEAR_APPLIERS';

//actions
export const getAppliersRequest = () => {
    return {
        type: GET_APPLIERS_REQUEST,
    };
};

export const getAppliersSuccess = (payload) => {
    return {
        type: GET_APPLIERS_SUCCESS,
        payload: payload,
    };
};

export const getAppliersFailure = (payload) => {
    return {
        type: GET_APPLIERS_FAILURE,
        payload: payload,
    };
};

export const updateApplierRequest = () => {
    return {
        type: UPDATE_APPLIER_REQUEST,
    };
};

export const updateApplierSuccess = (payload) => {
    return {
        type: UPDATE_APPLIER_SUCCESS,
        payload: payload,
    };
};

export const updateApplierFailure = (payload) => {
    return {
        type: UPDATE_APPLIER_FAILURE,
        payload: payload,
    };
};

export const clearError = () => {
    return {
        type: CLEAR_ERROR,
    };
};

export const clearAppliers = () => {
    return {
        type: CLEAR_APPLIERS,
    };
};
