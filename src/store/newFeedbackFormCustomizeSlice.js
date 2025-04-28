import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  labelName: "null",
};

const newFeedbackFormCustomizeSlice = createSlice({
  name: "newFeedbackFormCustomize",
  initialState,
  reducers: {
    addlabelName: (state, actions) => {
      state.labelName = actions.payload;
    },
  }
});

export const { addlabelName } = newFeedbackFormCustomizeSlice.actions;

export default newFeedbackFormCustomizeSlice;