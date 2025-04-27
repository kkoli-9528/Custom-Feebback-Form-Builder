import { configureStore } from "@reduxjs/toolkit";
import defaultCardSlice from "./defaultCardSlice";
import newFeedbackFormCustomizeSlice from "./newFeedbackFormCustomizeSlice";

export const store = configureStore({
  reducer: {
    defaultCard: defaultCardSlice.reducer,
    newFeedbackFormCustomize: newFeedbackFormCustomizeSlice.reducer
  },
});