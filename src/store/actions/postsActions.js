import { requestAdmin } from "utils/axios/axios-config";
import {
    getPostsRequest,
    getPostsSuccess,
    getPostsFailure,
    addPostsRequest,
    addPostsSuccess,
    addPostsFailure,
    deletePostsRequest,
    deletePostsSuccess,
    deletePostsFailure,
    getPostRequest,
    getPostSuccess,
    getPostFailure,
    updatePostsRequest,
    updatePostsSuccess,
    updatePostsFailure,
} from "store/types/postsTypes";

export const getPosts = (onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(getPostsRequest());
        requestAdmin
            .get("get-posts/all")
            .then((res) => {
                const data = res?.data;
                dispatch(getPostsSuccess(data));
            })
            .catch((err) => {
                const data = err?.data;
                dispatch(getPostsFailure(data));
            })
            .finally(() => onFinish());
    };
};

export const getPost = (postId, onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(getPostRequest());
        requestAdmin
            .get(`get-posts/${postId}`)
            .then((res) => {
                const data = res?.data;
                dispatch(getPostSuccess(data));
            })
            .catch((err) => {
                const data = err?.data;
                dispatch(getPostFailure(data));
            })
            .finally(() => onFinish());
    };
};

export const addPost = (data, onFinish = () => undefined) => {
    const { postPhoto, ...payload } = data;
    return (dispatch) => {
        dispatch(addPostsRequest());
        const formData = new FormData();
        formData.append("file", postPhoto);
        formData.append("data", JSON.stringify(payload));
        requestAdmin
            .post("add-post", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                const data = res?.data;
                dispatch(addPostsSuccess(data));
            })
            .catch((err) => {
                const data = err?.data;
                dispatch(addPostsFailure(data));
            })
            .finally(() => onFinish());
    };
};

export const updatePost = (data, onFinish = () => undefined) => {
    const { _id, postPhoto, __v, updatedAt, createdAt, ...payload } = data;
    return (dispatch) => {
        dispatch(updatePostsRequest());
        const formData = new FormData();
        if (typeof postPhoto !== "string") formData.append("file", postPhoto);
        formData.append("data", JSON.stringify(payload));
        requestAdmin
            .patch(`update-post`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                const data = res?.data;
                dispatch(updatePostsSuccess(data));
            })
            .catch((err) => {
                const data = err?.data;
                dispatch(updatePostsFailure(data));
            })
            .finally(() => onFinish());
    };
};

export const deletePost = (postId, onFinish = () => undefined) => {
    return (dispatch) => {
        dispatch(deletePostsRequest());
        requestAdmin
            .delete(`delete-post/${postId}`)
            .then((res) => {
                const data = res?.data;
                dispatch(deletePostsSuccess(data));
            })
            .catch((err) => {
                const data = err?.data;
                dispatch(deletePostsFailure(data));
            })
            .finally(() => {
                onFinish();
                dispatch(getPosts());
            });
    };
};
