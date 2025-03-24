import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

export interface SnackbarState {
  open: boolean;
  type: "info" | "success" | "warning" | "error";
  message: ReactNode;
  duration: number;
}

export const initialState: SnackbarState = {
  open: false,
  type: "success",
  message: "hello",
  duration: 3000,
};

interface ShowSnackbarPayload {
  message: ReactNode;
  type?: "info" | "success" | "warning" | "error";
  duration?: number;
}

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<ShowSnackbarPayload>) => {
      state.open = true;
      state.message = action.payload.message;
      state.type = action.payload.type || "success";
      state.duration = action.payload.duration ?? 3000;
    },
    hideSnackbar: (state) => {
      state.open = false;
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
