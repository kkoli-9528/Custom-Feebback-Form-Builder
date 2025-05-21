import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const switchComponentSlice = createSlice({
  name: "switchComponent",
  initialState,
  reducers: {
    triggerSwitch: (state, actions) => {
      state.toggle = true;
    },
  },
});

export const { triggerSwitch } = switchComponentSlice.actions;

export default switchComponentSlice;
