import { createSlice } from '@reduxjs/toolkit';

export interface LanguageTranslateProps {
  language: string;
}

const initialState = {
  language: sessionStorage.getItem('lang_trans') || 'en',
} as LanguageTranslateProps;

const languageTranslateSlice = createSlice({
  name: 'language_translate',
  initialState,
  reducers: {
    updateChangeLanguage: (state, action) => {
      const lang = action.payload;
      state.language = lang;
      sessionStorage.setItem('lang_trans', lang);
    },
  },
});

const { reducer, actions } = languageTranslateSlice;
export const { updateChangeLanguage } = actions;

export default reducer;
