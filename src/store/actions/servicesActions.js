import { requestAdmin } from 'utils/axios/axios-config';
import {
    getServicesRequest, getServicesSuccess, getServicesFailure,
    addServicesRequest, addServicesSuccess, addServicesFailure,
    deleteServicesRequest, deleteServicesSuccess, deleteServicesFailure, getServiceRequest, getServiceSuccess, getServiceFailure, updateServicesRequest, updateServicesSuccess, updateServicesFailure
} from "store/types/servicesTypes";

export const getServices = (onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(getServicesRequest());
        requestAdmin.get('get-services/all').then((res) => {
            const data = res?.data;
            dispatch(getServicesSuccess(data))
        }).catch((err) => {
            const data = err?.data;
            dispatch(getServicesFailure(data))
        }).finally(() => onFinish())
    }
}

export const getService = (serviceId, onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(getServiceRequest());
        requestAdmin.get(`get-services/${serviceId}`).then((res) => {
            const data = res?.data;
            dispatch(getServiceSuccess(data))
        }).catch((err) => {
            const data = err?.data;
            dispatch(getServiceFailure(data))
        }).finally(() => onFinish())
    }
}

export const addService = (data, onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(addServicesRequest());
        requestAdmin.post('add-service', data).then((res) => {
            const data = res?.data;
            dispatch(addServicesSuccess(data))
        }).catch((err) => {
            const data = err?.data;
            dispatch(addServicesFailure(data))
        }).finally(() => onFinish())
    }
}

export const updateService = (data, onFinish = () => undefined) => {
    const { _id, __v, updatedAt, createdAt, ...payload } = data;
    return (dispatch) => {
        dispatch(updateServicesRequest());
        requestAdmin.patch(`update-service`, { ...payload, serviceId: _id }).then((res) => {
            const data = res?.data;
            dispatch(updateServicesSuccess(data))
        }).catch((err) => {
            const data = err?.data;
            dispatch(updateServicesFailure(data))
        }).finally(() => onFinish())
    }
}

export const deleteService = (serviceId, onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(deleteServicesRequest());
        requestAdmin.delete(`delete-service/${serviceId}`).then((res) => {
            const data = res?.data;
            dispatch(deleteServicesSuccess(data));
        }).catch((err) => {
            const data = err?.data;
            dispatch(deleteServicesFailure(data));
        }).finally(() => {
            onFinish();
            dispatch(getServices());
        })
    }
}