import { createSlice } from "@reduxjs/toolkit";

const MAX_ELEMENT_LOADED = 7;

const initialState = [
  {
    id: 0,
    source: "images/textarea_icon.png",
    name: "Textarea",
    type: "textarea",
    position: 0,
    elementLoaded: 0,
  },
  {
    id: 1,
    source: "images/numerical_icon.png",
    name: "Numeric rating",
    type: "numerical_rating",
    position: 0,
    elementLoaded: 0,
  },
  {
    id: 2,
    source: "images/star_icon.png",
    name: "Star rating",
    type: "star_rating",
    position: 0,
    elementLoaded: 0,
  },
  {
    id: 3,
    source: "images/smiley_icon.png",
    name: "Smiley rating",
    type: "smiley_rating",
    position: 0,
    elementLoaded: 0,
  },
  {
    id: 4,
    source: "images/input_icon.png",
    name: "Single line input",
    type: "single_line_input",
    position: 0,
    elementLoaded: 0,
  },
  {
    id: 5,
    source: "images/radio_icon.png",
    name: "Radio button",
    type: "radio_button",
    position: 0,
    elementLoaded: 0,
  },
  {
    id: 6,
    source: "images/cate_icon.png",
    name: "Categories",
    type: "categories",
    position: 0,
    elementLoaded: 0,
  },
];

const addFieldsComponentSlice = createSlice({
  name: "addFieldsComponent",
  initialState,
  reducers: {
    addFieldComponents: (state, actions) => {
      console.log(state, actions);
      const newObj = state.find((arr) => arr.type === actions.payload.type);
      console.log(newObj);
      if (newObj.elementLoaded < MAX_ELEMENT_LOADED) {
        newObj.elementLoaded = newObj.elementLoaded + 1;
        newObj.id = actions.payload.id;
      }
    },
    removeFieldComponents: (state, actions) => {
      const newObj = state.find((arr) => arr.type === actions.payload.type);
      if (newObj.elementLoaded > -1) {
        newObj.elementLoaded = newObj.elementLoaded - 1;
      }
    },
  },
});

export const {
  addImages,
  addFieldComponents,
  removeFieldComponents,
} = addFieldsComponentSlice.actions;

export default addFieldsComponentSlice;
