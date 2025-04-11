import { removeCookie } from "@/utils/cookies";
import { createSlice } from "@reduxjs/toolkit";

export interface initialStateType {
  token: string;
  userType: string;
  userId: string;
  userName: string;
}
interface actionType {
  payload: initialStateType;
}
const initialState: initialStateType = {
  token: "",
  userType: "",
  userId: "",
  userName: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state: initialStateType, action: actionType) => {
      state.token = action.payload.token;
      state.userType = action.payload.userType;
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
    },
    logOut: (state) => {
      removeCookie("authToken");
      state.token = "";
      state.userType = "";
      state.userId = "";
      state.userName = "";
    },
  },
});

export const { loginSuccess, logOut } = authSlice.actions;
export default authSlice.reducer;
