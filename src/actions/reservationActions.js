import axios from "axios";

import {
  ADD_RESERVATION,
  EDIT_RESERVATION,
  GET_ERRORS,
  RESERVATION_LOADING,
  GET_RESERVATION,
  GET_MY_RESERVATIONS,
  GET_RESERVATIONS,
  GET_SUCCESS,
} from "./types";

//Add Resevation
export const addReservation = (post_id, reservationData) => (dispatch) => {
  axios
    .post(`/reservations/add/${post_id}`, reservationData)
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

//Get reservation by id

export const getReservationById = (id) => (dispatch) => {
  dispatch(setReservationLoading());
  axios
    .get(`/reservations/reservation/${id}`)
    .then((res) =>
      dispatch({
        type: GET_RESERVATION,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_RESERVATION,
        payload: {},
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

//Edit reservation
export const editReservation = (id, reservationData) => (dispatch) => {
  dispatch(setReservationLoading());
  axios
    .put(`/reservations/edit_reservation/${id}`, reservationData)
    .then((res) =>
      dispatch({
        type: GET_RESERVATION,
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

//Cancel reservation
export const cancelReservation = (id) => (dispatch) => {
  dispatch(setReservationLoading());
  axios
    .put(`/reservations/cancel/${id}`)
    .then((res) =>
      dispatch({
        type: GET_RESERVATION,
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

//Confirm reservation
export const confirmReservation = (id) => (dispatch) => {
  dispatch(setReservationLoading());
  axios
    .put(`/reservations/confirm/${id}`)
    .then((res) =>
      dispatch({
        type: GET_RESERVATION,
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

//Get confirmed reservation
export const getConfirmedReservations = () => (dispatch) => {
  dispatch(setReservationLoading());
  axios
    .get("reservations/user/confirmed")
    .then((res) =>
      dispatch({
        type: GET_MY_RESERVATIONS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_MY_RESERVATIONS,
        payload: {},
      })
    );
};

//Get canceled reservation
export const getCanceledReservations = () => (dispatch) => {
  dispatch(setReservationLoading());
  axios
    .get("reservations/user/canceled")
    .then((res) =>
      dispatch({
        type: GET_MY_RESERVATIONS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_MY_RESERVATIONS,
        payload: {},
      })
    );
};

//Get waiting reservation
export const getWaitingReservations = () => (dispatch) => {
  dispatch(setReservationLoading());
  axios
    .get("reservations/user/waiting")
    .then((res) =>
      dispatch({
        type: GET_MY_RESERVATIONS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_MY_RESERVATIONS,
        payload: {},
      })
    );
};
