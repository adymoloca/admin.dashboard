import { requestAdmin } from "utils/axios/axios-config";
import {
    getMembersRequest,
    getMembersSuccess,
    getMembersFailure,
    addMemberRequest,
    addMemberSuccess,
    addMemberFailure,
    deleteMemberRequest,
    deleteMemberSuccess,
    deleteMemberFailure,
    getMemberRequest,
    getMemberSuccess,
    getMemberFailure,
    updateMemberRequest,
    updateMemberSuccess,
    updateMemberFailure,
} from "store/types/membersTypes";

export const getMembers = (onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(getMembersRequest());
        requestAdmin
            .get("get-members/all")
            .then((res) => {
                const data = res?.data;
                dispatch(getMembersSuccess(data));
            })
            .catch((err) => {
                const data = err?.data;
                dispatch(getMembersFailure(data));
            })
            .finally(() => onFinish());
    };
};

export const getMember = (memberId, onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(getMemberRequest());
        requestAdmin
            .get(`get-members/${memberId}`)
            .then((res) => {
                const data = res?.data;
                dispatch(getMemberSuccess(data));
            })
            .catch((err) => {
                const data = err?.data;
                dispatch(getMemberFailure(data));
            })
            .finally(() => onFinish());
    };
};

export const addMember = (data, onFinish = () => undefined) => {
    const { avatar, ...dataObject } = data;
    return (dispatch) => {
        dispatch(addMemberRequest());
        const formData = new FormData();
        if (typeof avatar !== "string") formData.append("file", avatar);
        formData.append("data", JSON.stringify(dataObject));
        requestAdmin
            .post("add-member", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                const data = res?.data;
                dispatch(addMemberSuccess(data));
            })
            .catch((err) => {
                const data = err?.data;
                dispatch(addMemberFailure(data));
            })
            .finally(() => onFinish());
    };
};

export const updateMember = (data, onFinish = () => undefined) => {
    const { __v, updatedAt, password, createdAt, avatar, ...payload } = data;
    return (dispatch) => {
        dispatch(updateMemberRequest());
        const formData = new FormData();
        if (typeof avatar !== "string") formData.append("file", avatar);
        formData.append("data", JSON.stringify(payload));
        requestAdmin
            .patch(`update-member`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                const data = res?.data;
                dispatch(updateMemberSuccess(data));
            })
            .catch((err) => {
                const data = err?.data;
                dispatch(updateMemberFailure(data));
            })
            .finally(() => onFinish());
    };
};

export const deleteMember = (memberId, onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(deleteMemberRequest());
        requestAdmin
            .delete(`delete-member/${memberId}`)
            .then((res) => {
                const data = res?.data;
                dispatch(deleteMemberSuccess(data));
            })
            .catch((err) => {
                const data = err?.data;
                dispatch(deleteMemberFailure(data));
            })
            .finally(() => {
                onFinish();
                dispatch(getMembers());
            });
    };
};
