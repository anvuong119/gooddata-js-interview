import { configureStore } from '@reduxjs/toolkit';
import grossProfitReducer from '../pages/GrossProfit/grossProfitSlice';

const rootReducer = {
  grossProfit: grossProfitReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
