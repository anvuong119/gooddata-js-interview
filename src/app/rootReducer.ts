import { combineReducers } from '@reduxjs/toolkit';
import grossProfitReducer from '../pages/GrossProfit/grossProfitSlice';

const rootReducer = combineReducers({
  grossProfit: grossProfitReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
