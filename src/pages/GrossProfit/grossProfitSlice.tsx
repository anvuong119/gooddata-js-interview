import { createSlice } from '@reduxjs/toolkit';

interface FilterGrossProfit {
  activeMonth: number;
  activeYear: number;
}

const initialState = {
  activeMonth: 0,
  activeYear: 2015,
} as FilterGrossProfit;

const chartsSlide = createSlice({
  name: 'gross-profit',
  initialState,
  reducers: {
    updateActiveMonth: (state, action) => {
      const { activeMonth } = action.payload;
      state.activeMonth = parseInt(activeMonth);
    },
    updateActiveYear: (state, action) => {
      const { activeYear } = action.payload;
      state.activeYear = parseInt(activeYear);
    },
  },
});

const { reducer, actions } = chartsSlide;
export const { updateActiveMonth, updateActiveYear } = actions;

export default reducer;
