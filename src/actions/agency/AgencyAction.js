import {ADDAGENCY ,DELETEAGENCY,UPDATEAGENCY} from './AgencyAction'
export const addAgency = payload => {
    return {
      type: ADDAGENCY,
      payload
    };
  };

export const deleteAgency = payload => ({ type: DELETEAGENCY, payload });
export const editAgency = (payload,id) => ({ type: EDITAGENCY, payload ,id });
