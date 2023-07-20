import { requestAdmin } from "utils/axios/axios-config";
import {
  getCoursesRequest,
  getCoursesSuccess,
  getCoursesFailure,
  getCourseRequest,
  getCourseSuccess,
  getCourseFailure,
  addCourseRequest,
  addCourseSuccess,
  addCourseFailure,
  deleteCourseRequest,
  deleteCourseSuccess,
  deleteCourseFailure,
  updateCourseRequest,
  updateCourseSuccess,
  updateCourseFailure,
} from "store/types/coursesTypes";

export const getCourses = (onFinish = () => undefined) => {
  return (dispatch) => {
    dispatch(getCoursesRequest());
    requestAdmin
      .get("get-courses/all")
      .then((res) => {
        const data = res?.data;
        dispatch(getCoursesSuccess(data));
      })
      .catch((err) => {
        const data = err?.data;
        dispatch(getCoursesFailure(data));
      })
      .finally(() => onFinish());
  };
};

export const getCourse = (courseId, onFinish = () => undefined) => {
  return (dispatch) => {
    dispatch(getCourseRequest());
    requestAdmin
      .get(`get-courses/${courseId}`)
      .then((res) => {
        const data = res?.data;
        dispatch(getCourseSuccess(data));
      })
      .catch((err) => {
        const data = err?.data;
        dispatch(getCourseFailure(data));
      })
      .finally(() => onFinish());
  };
};

export const addCourse = (data, onFinish = () => undefined) => {
  //   const worked = data;
  //   Object.assign(worked, { courseDescription: "" });
  const { coursePhoto, ...dataObject } = data;
  return (dispatch) => {
    dispatch(addCourseRequest());
    const formData = new FormData();
    if (typeof avatar !== "string") formData.append("file", coursePhoto);
    formData.append("data", JSON.stringify(dataObject));
    requestAdmin
      .post("add-course", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        const data = res?.data;
        dispatch(addCourseSuccess(data));
      })
      .catch((err) => {
        const data = err?.response?.data;
        dispatch(addCourseFailure(data));
      })
      .finally(() => onFinish());
  };
};

export const updateCourse = (data, onFinish = () => undefined) => {
  const { _id, coursePhoto, courseTitle, difficulty, ...payload } = data;
  return (dispatch) => {
    dispatch(updateCourseRequest());
    requestAdmin
      .patch(`update-course`, { ...payload, courseId: _id })
      .then((res) => {
        const data = res?.data;
        dispatch(updateCourseSuccess(data));
      })
      .catch((err) => {
        const data = err?.data;
        dispatch(updateCourseFailure(data));
      })
      .finally(() => onFinish());
  };
};

export const deleteCourse = (courseId, onFinish = () => undefined) => {
  return (dispatch) => {
    dispatch(deleteCourseRequest());
    requestAdmin
      .delete(`delete-course/${courseId}`)
      .then((res) => {
        const data = res?.data;
        dispatch(deleteCourseSuccess(data));
      })
      .catch((err) => {
        const data = err?.data;
        dispatch(deleteCourseFailure(data));
      })
      .finally(() => {
        onFinish();
        dispatch(getCourses());
      });
  };
};
