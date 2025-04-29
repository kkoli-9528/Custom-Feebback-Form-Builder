import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    label: 'Show based on URL conditions',
    textType: 'url',
    error: "Enter valid URL"
  },
  {
    id: 1,
    label: 'Show on a specific date',
    textType: 'date',
    error: "Enter valid date"
  },
  {
    id: 2,
    label: 'Show on a specific time',
    textType: 'time',
    error: "Enter valid time"
  }
];

const addLogicComponentSlice = createSlice({
  name: 'addLogicComponent',
  initialState,
  reducers: {
    addLogic: (state, actions) => {
      return state;
    }
  }
})

export const { addLogic } = addLogicComponentSlice.actions;

export default addLogicComponentSlice;