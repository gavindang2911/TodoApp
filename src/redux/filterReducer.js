import { createSlice } from '@reduxjs/toolkit';
import List from '../data';

const filterSlice = createSlice({
  name: 'filter',
  initialState: [
    {
      status: 'All',
      dueDate: [],
    },
  ],
  reducers: {
    statusFilterChanged: (state, action) => {
       return {
        ...state,
        status: action.payload
       }
    },
    dueDateFilterChanged: (state, action) => {
        let { dueDate, changeType } = action.payload
      const { dueDates } = state

      switch (changeType) {
        case 'added': {
          if (dueDates.includes(dueDate)) {
            // This color already is set as a filter. Don't change the state.
            return state
          }

          return {
            ...state,
            dueDates: state.colors.concat(dueDate),
          }
        }
        case 'removed': {
          return {
            ...state,
            dueDates: state.dueDate.filter(
              (due) => due !== dueDate
            ),
          }
        }
        default:
          return state
      }
    },
  },
});

export const {
    statusFilterChanged,
    dueDateFilterChanged,
} = filterSlice.actions;

export default filterSlice.reducer;
