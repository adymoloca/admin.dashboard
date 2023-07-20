export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGOUT = 'LOGOUT';
export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAILURE = 'REFRESH_TOKEN_FAILURE';

export const loginRequest = (payload) => {
    return {
        type: LOGIN_REQUEST,
        payload: payload
    }
}

export const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload: payload
    }
}

export const loginFailure = (payload) => {
    return {
        type: LOGIN_FAILURE,
        payload: payload
    }
}

export const registerRequest = (payload) => {
    return {
        type: REGISTER_REQUEST,
        payload: payload
    }
}

export const registerSuccess = (payload) => {
    return {
        type: REGISTER_SUCCESS,
        payload: payload
    }
}

export const registerFailure = (payload) => {
    return {
        type: REGISTER_FAILURE,
        payload: payload
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const refreshTokenRequest = (payload) => {
    return {
        type: REFRESH_TOKEN_REQUEST,
        payload: payload
    }
}

export const refreshTokenSuccess = (payload) => {
    return {
        type: REFRESH_TOKEN_SUCCESS,
        payload: payload
    }
}

export const refreshTokenFailure = (payload) => {
    return {
        type: REFRESH_TOKEN_FAILURE,
        payload: payload
    }
}