import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EmailState {
  email: string;
}

export const initialState: EmailState = {
  email: "",
};

export const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    storeEmail: (state, action: PayloadAction<EmailState>) => {
      state.email = action.payload.email;
    },
  },
});

export const { storeEmail } = emailSlice.actions;
export default emailSlice.reducer;
