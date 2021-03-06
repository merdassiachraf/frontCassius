import axios from "axios";

import {
  GET_ERRORS,
  GET_POSTS,
  POST_LOADING,
  GET_POST,
  GET_USER_POSTS,
  GET_AGENCY_POSTS,
} from "./types";

//Add Post
export const addPost = (postData, history) => (dispatch) => {
  axios
    .post("/posts", postData)
    .then(() => history.push("/dashboard/my_posts"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Edit Post
export const editPost = (id, postData) => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .put(`/posts/edit_post/${id}`, postData)
    .then((res) =>
      dispatch({
        type: GET_POST,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Delete Post
export const deletePost = (id, history) => (dispatch) => {
  axios
    .delete(`/posts/delete/${id}`)
    .then(() => history.push("/dashboard/my_posts"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Get Posts
export const getPosts = () => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .get("/posts")
    .then((res) =>
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_POSTS,
        payload: null,
      })
    );
};

//Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING,
  };
};

//Get post by ID
export const getPostById = (id) => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .get(`/posts/post/${id}`)
    .then((res) =>
      dispatch({
        type: GET_POST,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_POST,
        payload: null,
      })
    );
};

//Get current user posts

export const getUserPosts = () => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .get("/posts/my_posts")
    .then((res) =>
      dispatch({
        type: GET_USER_POSTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_USER_POSTS,
        payload: null,
      })
    );
};

//Get agency posts

export const getAgencyPosts = (handle) => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .get(`/posts/agencies_posts/${handle}`)
    .then((res) =>
      dispatch({
        type: GET_AGENCY_POSTS,
        payload: res.data,
      })
    )
    .then((err) =>
      dispatch({
        type: GET_AGENCY_POSTS,
        payload: [],
      })
    );
};
