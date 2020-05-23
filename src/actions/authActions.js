import axios from "axios";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../utils/setAuthToken";

// Singup

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/users/register/local", userData)
    .then(() => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Sign In

export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/users/login/local", userData)
    .then((res) => {
      // Save to local storage
      const { token } = res.data;

      //Set token to local storage
      localStorage.setItem("jwtToken", token);

      // Set token to auth header
      setAuthToken(token);

      //decode token to get user data

      const decoded = jwt_decode(token);

      // Set current user

      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Set logged in user

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

///Log user out

export const logoutUser = () => dispatch => {

  //Remove token from localStorage
  localStorage.removeItem("jwtToken");

  //Remove the auth header for future requests
  setAuthToken(false);

  //Set current user to {} wich will set isAuthenticated to false
  dispatch(setCurrentUser({}))
};
