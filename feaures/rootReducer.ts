import { combineReducers } from "@reduxjs/toolkit";
import snackbarReducer from "./snackbarSlice/snackbarSlice";
import authReducer from "./authSlice/authSlice";

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
