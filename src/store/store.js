import { configureStore } from "@reduxjs/toolkit";
import defaultCardSlice from "./defaultCardSlice";
import newFeedbackFormCustomizeSlice from "./newFeedbackFormCustomizeSlice";
import headerButtonSlice from "./headerbuttonSlice";

export const store = configureStore({
  reducer: {
    defaultCard: defaultCardSlice.reducer,
    newFeedbackFormCustomize: newFeedbackFormCustomizeSlice.reducer,
    headerButton: headerButtonSlice.reducer
  },
});