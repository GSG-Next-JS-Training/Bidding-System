import { combineReducers } from "@reduxjs/toolkit";
import snackbarReducer from "./snackbarSlice/snackbarSlice";

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
