import { agencies } from "./AgenciesData";

const initialState = {
  agencies
};

export const agenciesReducer = (state = initialState, action) => {
  const {type,payload,id}=action
  switch (type) {
    case "ADDAGENCY":
      return {
        ...state
      };
    case "DELETEAGENCY":
      return { ...state };
    case "EDITAGENCY":
      return {...state };
    case "FILTREAGENCY":
      return {...state,
      search:payload}
    default:
      return { ...state };
  }
};
