import { requestAdmin } from "utils/axios/axios-config";
import {
  getStudentsRequest,
  getStudentsSuccess,
  getStudentsFailure,
  deleteStudentsRequest,
  deleteStudentsSuccess,
  deleteStudentsFailure,
  blockStudentsRequest,
  blockStudentsSuccess,
  blockStudentsFailure,
} from "store/types/studentsTypes";

export const getStudents = (onFinish = () => undefined) => {
  return (dispatch) => {
    dispatch(getStudentsRequest());
    requestAdmin
      .get("get-students/all")
      .then((res) => {
        const data = res?.data;
        dispatch(getStudentsSuccess(data));
      })
      .catch((err) => {
        const data = err?.data;
        dispatch(getStudentsFailure(data));
      })
      .finally(() => onFinish());
  };
};
export const deleteStudent = (studentId, onFinish = () => undefined) => {
  return (dispatch) => {
    dispatch(deleteStudentsRequest());
    requestAdmin
      .delete(`delete-student/${studentId}`)
      .then((res) => {
        const data = res?.data;
        dispatch(deleteStudentsSuccess(data));
      })
      .catch((err) => {
        const data = err?.data;
        dispatch(deleteStudentsFailure(data));
      })
      .finally(() => {
        onFinish();
        dispatch(getStudents());
      });
  };
};
export const blockStudent = (studentId, isBlocked, onFinish = () => undefined) => {
  return (dispatch) => {
    dispatch(blockStudentsRequest());
    requestAdmin
      .patch(`block-student`, {studentId, isBlocked})
      .then((res) => {
        const data = res?.data;
        dispatch(blockStudentsSuccess(data));
      })
      .catch((err) => {
        const data = err?.data;
        dispatch(blockStudentsFailure(data));
      })
      .finally(() => {
        onFinish();
        dispatch(getStudents());
      });
  };
};
