import {
  GET_STUDENTS_REQUEST,
  GET_STUDENTS_SUCCESS,
  GET_STUDENTS_FAILURE,
  DELETE_STUDENTS_REQUEST,
  DELETE_STUDENTS_SUCCESS,
  DELETE_STUDENTS_FAILURE,
  BLOCK_STUDENTS_REQUEST,
  BLOCK_STUDENTS_SUCCESS,
  BLOCK_STUDENTS_FAILURE,
  CLEAR_STUDENTS,
  CLEAR_ERROR,
} from "../types/studentsTypes.js";

const initialState = {
  loading: false,
  error: {
    status: false,
    message: "",
  },
  students: [],
  student: {},
};

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: {
          status: false,
          message: action?.payload?.message,
        },
        students: action?.payload?.students,
      };
    case GET_STUDENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: {
          status: true,
          message: action?.payload?.message,
        },
      };
      case DELETE_STUDENTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_STUDENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: {
            status: false,
            message: action?.payload?.message,
          },
          // news: action?.payload?.news
        };
      case DELETE_STUDENTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: {
            status: true,
            message: action?.payload?.message,
          },
        };
        case BLOCK_STUDENTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case BLOCK_STUDENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: {
            status: false,
            message: action?.payload?.message,
          },
          // news: action?.payload?.news
        };
      case BLOCK_STUDENTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: {
            status: true,
            message: action?.payload?.message,
          },
        };
    case CLEAR_ERROR:
      return {
        ...state,
        error: { ...initialState.error },
      };
    case CLEAR_STUDENTS:
      return {
        ...state,
        students: [],
      };
    default:
      return state;
  }
};

export default studentsReducer;
