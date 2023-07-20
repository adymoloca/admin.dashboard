export const GET_COURSES_REQUEST = 'GET_COURSES_REQUEST';
export const GET_COURSES_SUCCESS = 'GET_COURSES_SUCCESS';
export const GET_COURSES_FAILURE = 'GET_COURSES_FAILURE';
export const GET_COURSE_REQUEST = 'GET_COURSE_REQUEST';
export const GET_COURSE_SUCCESS = 'GET_COURSE_SUCCESS';
export const GET_COURSE_FAILURE = 'GET_COURSE_FAILURE';
export const ADD_COURSE_REQUEST = 'ADD_COURSE_REQUEST';
export const ADD_COURSE_SUCCESS = 'ADD_COURSE_SUCCESS';
export const ADD_COURSE_FAILURE = 'ADD_COURSE_FAILURE';
export const UPDATE_COURSE_REQUEST = 'UPDATE_COURSE_REQUEST';
export const UPDATE_COURSE_SUCCESS = 'UPDATE_COURSE_SUCCESS';
export const UPDATE_COURSE_FAILURE = 'UPDATE_COURSE_FAILURE';
export const DELETE_COURSE_REQUEST = 'DELETE_COURSE_REQUEST';
export const DELETE_COURSE_SUCCESS = 'DELETE_COURSE_SUCCESS';
export const DELETE_COURSE_FAILURE = 'DELETE_COURSE_FAILURE';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const CLEAR_COURSES = 'CLEAR_COURSES';

//actions
export const getCoursesRequest = () => {
  return {
    type: GET_COURSES_REQUEST,
  };
};

export const getCoursesSuccess = (payload) => {
  return {
    type: GET_COURSES_SUCCESS,
    payload: payload,
  };
};

export const getCoursesFailure = (payload) => {
  return {
    type: GET_COURSES_FAILURE,
    payload: payload,
  };
};

export const getCourseRequest = () => {
  return {
    type: GET_COURSE_REQUEST,
  };
};

export const getCourseSuccess = (payload) => {
  return {
    type: GET_COURSE_SUCCESS,
    payload: payload,
  };
};

export const getCourseFailure = (payload) => {
  return {
    type: GET_COURSE_FAILURE,
    payload: payload,
  };
};

export const addCourseRequest = () => {
  return {
    type: ADD_COURSE_REQUEST,
  };
};

export const addCourseSuccess = (payload) => {
  return {
    type: ADD_COURSE_SUCCESS,
    payload: payload,
  };
};

export const addCourseFailure = (payload) => {
  return {
    type: ADD_COURSE_FAILURE,
    payload: payload,
  };
};

export const updateCourseRequest = () => {
  return {
    type: UPDATE_COURSE_REQUEST,
  };
};

export const updateCourseSuccess = (payload) => {
  return {
    type: UPDATE_COURSE_SUCCESS,
    payload: payload,
  };
};

export const updateCourseFailure = (payload) => {
  return {
    type: UPDATE_COURSE_FAILURE,
    payload: payload,
  };
};

export const deleteCourseRequest = () => {
  return {
    type: DELETE_COURSE_REQUEST,
  };
};

export const deleteCourseSuccess = (payload) => {
  return {
    type: DELETE_COURSE_SUCCESS,
    payload: payload,
  };
};

export const deleteCourseFailure = (payload) => {
  return {
    type: DELETE_COURSE_FAILURE,
    payload: payload,
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};

export const clearCourses = () => {
  return {
    type: CLEAR_COURSES,
  };
};
