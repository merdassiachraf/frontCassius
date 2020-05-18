import { combineReducers } from "redux";

import authReducer from "./authReducer";
import errorsReducers from "./errorsReducer";
import profileReducer from "./profileReducer";
import postReducer from "./postReducer";
import resevationReducer from "./reservationReducer"

export const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorsReducers,
  profile: profileReducer,
  post: postReducer,
  reservation:resevationReducer
});
