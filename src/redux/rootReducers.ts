import { combineReducers } from '@reduxjs/toolkit';
import grossProfitReducer from '_components/pages/GrossProfit/grossProfitSlice';
import languageTranslateReducer from '../i18n/i18Slice';

const rootReducer = combineReducers({
  grossProfit: grossProfitReducer,
  languageTranslate: languageTranslateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
