import { createSlice } from '@reduxjs/toolkit';

export interface FilterGrossProfit {
  activeMonth: number;
  activeYear: number;
}

const initialState = {
  activeMonth: localStorage.getItem('month_filter') || 1,
  activeYear: localStorage.getItem('year_filter') || 2015,
} as FilterGrossProfit;

const chartsSlide = createSlice({
  name: 'gross-profit',
  initialState,
  reducers: {
    updateActiveMonth: (state, action) => {
      const activeMonth = action.payload;
      state.activeMonth = parseInt(activeMonth);
      localStorage.setItem('month_filter', activeMonth);
    },
    updateActiveYear: (state, action) => {
      const activeYear = action.payload;
      state.activeYear = parseInt(activeYear);
      localStorage.setItem('year_filter', activeYear);
    },
  },
});

const { reducer, actions } = chartsSlide;
export const { updateActiveMonth, updateActiveYear } = actions;

export default reducer;
