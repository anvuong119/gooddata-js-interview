import { createSlice } from '@reduxjs/toolkit';

const chartsSlide = createSlice({
  name: 'chart',
  initialState: 0,
  reducers: {
    updateActiveMonth: (state, action) => {
      console.log(state);
      const activeMonth = action.payload;
      state = parseInt(activeMonth);
      return state;
    },
    updateActiveYear: (state, action) => {
      const activeYear = action.payload;
      state = parseInt(activeYear);
      return state;
    },
  },
});

const { reducer, actions } = chartsSlide;
export const { updateActiveMonth, updateActiveYear } = actions;

export default reducer;
