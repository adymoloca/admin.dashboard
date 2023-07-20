import { requestAdmin, requestToken } from "utils/axios/axios-config";
import { loginRequest, loginSuccess, loginFailure, registerRequest, registerSuccess, registerFailure, refreshTokenRequest, refreshTokenSuccess, refreshTokenFailure } from "store/types/userTypes";

export const login = (data) => {
    return (dispatch) => {
        dispatch(loginRequest())
        requestAdmin.post('login', data).then((res) => {
            const data = res.data;
            dispatch(loginSuccess(data));
        }).catch((err) => {
            const error = err?.response?.data;
            dispatch(loginFailure(error));
        })
    }
}

export const register = (data) => {
    const { submit, ...others } = data;
    return (dispatch) => {
        dispatch(registerRequest())
        requestAdmin.post('register', others).then((res) => {
            const data = res.data;
            dispatch(registerSuccess(data))
        }).catch((err) => {
            const error = err?.response?.data;
            dispatch(registerFailure(error))
        })
    }
}

export const refresh = (data) => {
    return (dispatch) => {
        dispatch(refreshTokenRequest());
        requestToken.post('refresh-token', data).then((res) => {
            const data = res?.data;
            dispatch(refreshTokenSuccess(data))
        }).catch((error) => {
            const data = error?.response?.data;
            dispatch(refreshTokenFailure(data))
        })
    }
}