import { combineReducers } from "@reduxjs/toolkit";
import snackbarReducer from "./snackbarSlice/snackbarSlice";
import authReducer from "./authSlice/authSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import companyReducer from "./companySlice/companySlice";

const persistAuthConfig = {
  key: "user",
  storage,
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

const rootReducer = combineReducers({
  snackbar: snackbarReducer,
  auth: persistedAuthReducer,
  company: companyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
