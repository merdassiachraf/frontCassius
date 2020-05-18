import axios from "axios";

import {
  ADD_RESERVATION,
  EDIT_RESERVATION,
  GET_ERRORS,
  RESERVATION_LOADING,
  GET_RESERVATION,
  GET_MY_RESERVATIONS,
  GET_RESERVATIONS
} from "./types";

//Add Resevation
export const addReservation = (post_id, reservationData) => (dispatch) => {
  axios
    .post(`/reservations/add/${post_id}`, reservationData)
    .then((res) =>
      dispatch({
        type: ADD_RESERVATION,
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

//Get reservation by id

export const getReservationById = (id) => (dispatch) => {
  dispatch(setReservationLoading());
  axios
    .get(`/reservations/${id}`)
    .then((res) =>
      dispatch({
        type: GET_RESERVATION,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_RESERVATION,
        payload: null,
      })
    );
};

//Get reservations
export const getMyReservations = () => (dispatch) => {
  dispatch(setReservationLoading());
  axios
    .get("reservations/user")
    .then((res) =>
      dispatch({
        type: GET_MY_RESERVATIONS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_MY_RESERVATIONS,
        payload: null,
      })
    );
};

//Set loading state
export const setReservationLoading = () => {
  return {
    type: RESERVATION_LOADING,
  };
};
