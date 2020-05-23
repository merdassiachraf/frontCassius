import {
  ADD_RESERVATION,
  EDIT_RESERVATION,
  GET_MY_RESERVATIONS,
  RESERVATION_LOADING,
  GET_RESERVATION,
  GET_RESERVATIONS,
} from "../actions/types";

const initialState = {
  reservations: null,
  my_reservations: null,
  reservation: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RESERVATION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_MY_RESERVATIONS:
      return {
        ...state,
        my_reservations: action.payload,
        loading: false,
      };
    case GET_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload,
        loading: false,
      };
    case GET_RESERVATION:
      return {
        ...state,
        reservation: action.payload,
        loading: false,
      }
    case ADD_RESERVATION:
      return {
        ...state,
        reservations: [action.payload, ...state.reservations],
      };

    case EDIT_RESERVATION:
      return {
        ...state,
        reservation: action.payload,
      };
    default:
      return state;
  }
}
