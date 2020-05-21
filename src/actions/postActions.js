import axios from "axios";

import {
  ADD_POST,
  EDIT_POST,
  GET_ERRORS,
  GET_POSTS,
  POST_LOADING,
  GET_POST,
  GET_USER_POSTS,
} from "./types";

//Add Post
export const addPost = (postData) => (dispatch) => {
  axios
    .post("/posts", postData)
    .then((res) =>
      dispatch({
        type: ADD_POST,
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

//Edit Post
export const editPost = (
  id,
  { brand, model, fuel, transmission, adress, state, country, pricePerDay }
) => (dispatch) => {
  dispatch(setPostLoading());

  axios
    .put(`/posts/edit_post/${id}`, {
      brand,
      model,
      fuel,
      transmission,
      adress,
      state,
      country,
      pricePerDay,
    })
    .then((res) =>
      dispatch({
        type: EDIT_POST,
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
export const deletePost = (id) => (dispatch) => {
  axios
    .delete(`/posts/delete/${id}`)
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
