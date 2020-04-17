import axios from "axios";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../utils/setAuthToken";

// Singup

export const SignUpUser = (userData, history) => (dispatch) => {
  axios
    .post("/users/signup", userData)
    .then(() => history.push("/signin"))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Sign In

export const SignInUser = (userData) => (dispatch) => {
  axios
    .post("/users/signin", userData)
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

export const LogoutUser = () => dispatch => {

  //Remove token from localStorage
  localStorage.removeItem("jwtToken");

  //Remove the auth header for future requests
  setAuthToken(false);

  //Set current user to {} wich will set isAuthenticated to false
  dispatch(setCurrentUser({}))
};
