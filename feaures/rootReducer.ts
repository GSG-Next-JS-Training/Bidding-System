import { combineReducers } from "@reduxjs/toolkit";
import { snackbarReducer } from "./snackbarSlice/snackbarSlice";


const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  snackbar:snackbarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;