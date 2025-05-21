import { configureStore } from "@reduxjs/toolkit";
import defaultCardSlice from "./defaultCardSlice";
import newFeedbackFormCustomizeSlice from "./newFeedbackFormCustomizeSlice";
import headerButtonSlice from "./headerbuttonSlice";
import addFieldsComponentSlice from "./addFieldsComponentSlice";
import addLogicComponentSlice from "./addLogicComponentSlice";
import switchComponentSlice from "./switchComponentSlice";

export const store = configureStore({
  reducer: {
    defaultCard: defaultCardSlice.reducer,
    newFeedbackFormCustomize: newFeedbackFormCustomizeSlice.reducer,
    headerButton: headerButtonSlice.reducer,
    addFieldsComponent: addFieldsComponentSlice.reducer,
    addLogicComponent: addLogicComponentSlice.reducer,
    switchComponent: switchComponentSlice.reducer,
  },
});
