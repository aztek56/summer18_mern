import axios from 'axios';

import {
    POST_LOADING,
    GET_POSTS,
    //GET_POST,
    ADD_POST,
    DELETE_POST,
    GET_ERRORS
} from "./types";

// Add post
export const addPost = (postData) => dispatch => {
    axios.post('/api/posts', postData)
        .then(res => {
            dispatch({
                type: ADD_POST,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};

// Get all post
export const getPosts = () => dispatch => {
    dispatch(setPostLoading());
    axios.get('/api/posts')
        .then(res => {
            dispatch({
                type: GET_POSTS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_POSTS,
                payload: null
            });
        });
};

// Delete Post
export const deletePost = (idPost) => dispatch => {
    axios.post(`/api/posts/${idPost}`)
        .then(res => {
            dispatch({
                type: DELETE_POST,
                payload: idPost
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};

// Add Like
export const addLike = (idPost) => dispatch => {
    axios.post(`/api/posts/like/${idPost}`)
        .then(res => dispatch(getPosts()))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};

// Remove Like
export const removeLike = (idPost) => dispatch => {
    axios.post(`/api/posts/unlike/${idPost}`)
        .then(res => dispatch(getPosts()))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};

// Set loading state
export const setPostLoading = () => {
    return {
        type: POST_LOADING
    }
}
