import { combineReducers } from "redux";

import authReducer from "./authReducer";
import errorsReducers from "./errorsReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorsReducers,
});
