import axios from "axios";

import {
  ADD_RESERVATION,
  EDIT_RESERVATION,
  GET_ERRORS,
  GET_RESERVATIONS,
  RESERVATION_LOADING,
  GET_RESERVATION,
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

// //Get reservation
// export const getReservations =()=> (dispatch)=>{
//   dispatch(setReservationLoading())
//   axios.get('reservations/user')
//   .then(res=>
//     dispatch({type:GET_RESERVATIONS}))
// }
