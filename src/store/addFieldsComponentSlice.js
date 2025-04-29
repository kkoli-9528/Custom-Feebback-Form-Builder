import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    source: 'images/textarea_icon.png',
    name: "Textarea"
  },
  {
    id: 1,
    source: 'images/numerical_icon.png',
    name: "Numeric rating"
  },
  {
    id: 2,
    source: 'images/star_icon.png',
    name: "Star rating"
  },
  {
    id: 3,
    source: 'images/smiley_icon.png',
    name: "Smiley rating"
  },
  {
    id: 4,
    source: 'images/input_icon.png',
    name: "Single line input"
  },
  {
    id: 5,
    source: 'images/radio_icon.png',
    name: "Radio button"
  },
  {
    id: 6,
    source: 'images/cate_icon.png',
    name: "Categories"
  }
];

const addFieldsComponentSlice = createSlice({
  name: 'addFieldsComponent',
  initialState,
  reducers: {
    addImages: (state, actions) => {
      console.log(state, actions);
      return state;
    }
  }
});

export const { addImages } = addFieldsComponentSlice.
  actions;

export default addFieldsComponentSlice;