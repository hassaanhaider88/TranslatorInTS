import { createSlice } from "@reduxjs/toolkit";

const TranslateSlice = createSlice({
  name: "Translate",
  initialState: {
    lang: "ur",
    text: "",
    translatedText: "",
    loading: false,
  },
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
    setTranslatedText: (state, action) => {
      state.translatedText = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLanguage, setText, setTranslatedText, setLoading } =
  TranslateSlice.actions;

export default TranslateSlice.reducer;
