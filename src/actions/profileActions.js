import axios from "axios";
import {
  GET_PROFILE,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
  PROFILE_LOADING,
  GET_PROFILES,
  GET_SUCCESS,
} from "./types";

//Get current profile
export const getCurrentProfile = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get("/profile")
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILE,
        payload: {},
      })
    );
};

//Get profile by handle

export const getProfileByHandle = (handle) => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get(`/profile/handle/${handle}`)
    .then((res) =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILE,
        payload: null,
      })
    );
};

//Create profile
export const createProfile = (profileData, history) => (dispatch) => {
  axios
    .post("/profile", profileData)
    .then(() => history.push("/dashboard"))
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

//Profile loading

export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING,
  };
};

//Clear profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE,
  };
};

//Add adress
export const addContactInformation = (contactInformationData, history) => (
  dispatch
) => {
  axios
    .post("/profile/contact/add", contactInformationData)
    .then(() => history.push("/dashboard"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Edit contact info
export const editContactInformation = (id, contactInformationData, history) => (
  dispatch
) => {
  axios
    .put(`/profile/contact/edit/${id}`, contactInformationData)
    .then(() => history.push("/dashboard"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Get All Profiles
export const getProfiles = () => (dispatch) => {
  dispatch(setProfileLoading());
  axios
    .get("/profile/agencies")
    .then((res) =>
      dispatch({
        type: GET_PROFILES,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PROFILES,
        payload: null,
      })
    );
};
//Delete Contact inofrmation

export const deleteContactInformation = (id) => (dispatch) => {
  axios
    .delete(`/profile/contact/delete/${id}`)
    .then((res) =>
      dispatch({
        type: GET_SUCCESS,
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

//Delete account
export const deleteAccount = () => (dispatch) => {
  axios
    .delete("/profile/delete")
    .then((res) =>
      dispatch({
        type: GET_SUCCESS,
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
