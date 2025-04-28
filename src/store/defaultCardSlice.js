import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const defaultCardSlice = createSlice({
  name: 'defaultCard',
  initialState,
  reducers: {
    handleClickOpen: (state) => {
      state.value = true;
    },
    handleClose: (state) => {
      state.value = false;
    }
  },
});

export const { handleClickOpen, handleClose } = defaultCardSlice.actions;

export default defaultCardSlice;