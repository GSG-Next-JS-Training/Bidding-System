import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompanyState {
  id: unknown;
}

export const initialState: CompanyState = {
  id: "",
};

export const companySlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    storeCompany: (state, action: PayloadAction<CompanyState>) => {
      state.id = action.payload.id;
    },
  },
});

export const { storeCompany } = companySlice.actions;
export default companySlice.reducer;
