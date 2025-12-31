import { configureStore } from "@reduxjs/toolkit";
import TranslateReducer from "./Feature/TransalteSlice";

const store = configureStore({
  reducer: {
    Translate: TranslateReducer,
  },
});

export default store;
