import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TranslateState {
  lang: string;
  text: string;
  translatedText: string;
  loading: boolean;
}

const initialState: TranslateState = {
  lang: "ur",
  text: "",
  translatedText: "",
  loading: false,
};

const TranslateSlice = createSlice({
  name: "Translate",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    setTranslatedText: (state, action: PayloadAction<string>) => {
      state.translatedText = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLanguage, setText, setTranslatedText, setLoading } =
  TranslateSlice.actions;

export default TranslateSlice.reducer;
