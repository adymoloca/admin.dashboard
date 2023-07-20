import { requestAdmin } from 'utils/axios/axios-config';
import {
    getProjectsRequest, getProjectsSuccess, getProjectsFailure,
    addProjectsRequest, addProjectsSuccess, addProjectsFailure,
    deleteProjectsRequest, deleteProjectsSuccess, deleteProjectsFailure, getProjectRequest, getProjectSuccess, getProjectFailure, updateProjectsRequest, updateProjectsSuccess, updateProjectsFailure
} from "store/types/projectsTypes";

export const getProjects = (onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(getProjectsRequest());
        requestAdmin.get('get-projects/all').then((res) => {
            const data = res?.data;
            dispatch(getProjectsSuccess(data))
        }).catch((err) => {
            const data = err?.data;
            dispatch(getProjectsFailure(data))
        }).finally(() => onFinish())
    }
}

export const getProject = (projectId, onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(getProjectRequest());
        requestAdmin.get(`get-projects/${projectId}`).then((res) => {
            const data = res?.data;
            dispatch(getProjectSuccess(data))
        }).catch((err) => {
            const data = err?.data;
            dispatch(getProjectFailure(data))
        }).finally(() => onFinish())
    }
}

export const addProject = (data, onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(addProjectsRequest());
        requestAdmin.post('add-project', data).then((res) => {
            const data = res?.data;
            dispatch(addProjectsSuccess(data))
        }).catch((err) => {
            const data = err?.data;
            dispatch(addProjectsFailure(data))
        }).finally(() => onFinish())
    }
}

export const updateProject = (data, onFinish = () => undefined) => {
    const { _id, __v, updatedAt, createdAt, ...payload } = data;
    return (dispatch) => {
        dispatch(updateProjectsRequest());
        requestAdmin.patch(`update-project`, { ...payload, projectId: _id }).then((res) => {
            const data = res?.data;
            dispatch(updateProjectsSuccess(data))
        }).catch((err) => {
            const data = err?.data;
            dispatch(updateProjectsFailure(data))
        }).finally(() => onFinish())
    }
}

export const deleteProject = (projectId, onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(deleteProjectsRequest());
        requestAdmin.delete(`delete-project/${projectId}`).then((res) => {
            const data = res?.data;
            dispatch(deleteProjectsSuccess(data));
        }).catch((err) => {
            const data = err?.data;
            dispatch(deleteProjectsFailure(data));
        }).finally(() => {
            onFinish();
            dispatch(getProjects());
        })
    }
}