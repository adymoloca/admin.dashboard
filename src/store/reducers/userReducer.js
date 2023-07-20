import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE
} from "store/types/userTypes";

const initialState = {
  loading: false,
  error: {
    status: false,
    message: "",
  },
  user: {},
  token: "",
  refreshToken: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {
          status: false,
          message: action?.payload?.message,
        },
        user: action?.payload?.admin,
        token: action?.payload?.accessToken,
        refreshToken: action?.payload?.refreshToken,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: {
          status: true,
          message: action?.payload?.error,
        },
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {
          status: false,
          message: action?.payload?.message,
        },
        user: action?.payload?.admin,
        token: action?.payload?.accessToken,
        refreshToken: action?.payload?.refreshToken,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: {
          status: true,
          message: action?.payload?.error,
        },
      };
    case REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {
          status: false,
          message: action?.payload?.message,
        },
        token: action?.payload?.accessToken,
        refreshToken: action?.payload?.refreshToken,
      };
    case REFRESH_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        error: {
          status: true,
          message: action?.payload?.error,
        },
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default userReducer;
