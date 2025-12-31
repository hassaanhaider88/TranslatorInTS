import { configureStore } from "@reduxjs/toolkit";
import TranslateReducer from "./Feature/TransalteSlice";

const store = configureStore({
  reducer: {
    Translate: TranslateReducer,
  },
});

// / 🔑 REQUIRED TYPES
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
