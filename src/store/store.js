import { configureStore } from "@reduxjs/toolkit";
import defaultCardSlice from "./defaultCardSlice";

export const store = configureStore({
  reducer: {
    defaultCard: defaultCardSlice.reducer,
  },
});