import { requestAdmin } from 'utils/axios/axios-config';
import {
    getAppliersRequest,
    getAppliersSuccess,
    getAppliersFailure,
    updateApplierRequest,
    updateApplierSuccess,
    updateApplierFailure,
} from 'store/types/appliersTypes';

export const getAppliers = (onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(getAppliersRequest());
        requestAdmin
            .get('get-applicants/all')
            .then((res) => {
                const data = res?.data;
                dispatch(getAppliersSuccess(data));
            })
            .catch((err) => {
                const data = err?.data;
                dispatch(getAppliersFailure(data));
            })
            .finally(() => onFinish());
    };
};

export const updateApplier = (applierId, accepted, onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(updateApplierRequest());
        requestAdmin
            .patch('reply-applicant', { applicantId: applierId, accepted: accepted })
            .then((res) => {
                const data = res?.data;
                dispatch(updateApplierSuccess(data));
            })
            .catch((err) => {
                const data = err?.response?.data;
                dispatch(updateApplierFailure(data));
            })
            .finally(() => {
                onFinish();
            });
    };
};
