import axios from "axios";
import {
  GET_PROFILE,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
  PROFILE_LOADING,
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

//Create profile
export const createProfile = (profileData, history) => (dispatch) => {
  axios
    .post("/profile", profileData)
    .then((res) => history.push("/dashboard"))
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
