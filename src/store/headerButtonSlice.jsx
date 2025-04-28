import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const headerButtonSlice = createSlice({
  name: "headerButton",
  initialState,
  reducers: {
    addButtons: (state) => {
      state.value = true;
    }
  }
});

export const { addButtons } = headerButtonSlice.actions;

export default headerButtonSlice;