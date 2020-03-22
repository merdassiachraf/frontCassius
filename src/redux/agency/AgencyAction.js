import {
  ADDAGENCY,
  FILTREAGENCY,
  DELETEAGENCY,
  EDITAGENCY
} from "./AgencyType";
export const addAgency = () => {
  return {
    type: ADDAGENCY
  };
};

export const deleteAgency = () => ({
  type: DELETEAGENCY
});
export const editAgency = () => ({
  type: EDITAGENCY
});
export const filtreAgency = (payload) => ({
  type: FILTREAGENCY,
  payload
});
