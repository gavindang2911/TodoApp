import { createSlice } from '@reduxjs/toolkit';
import List from '../data';

export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
  Inprogress: 'inprogress'
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    status: StatusFilters.All,
    dueDates: [],
  },

  reducers: {
    statusFilterChanged: (state, action) => {
      return {
        ...state,
        status: action.payload,
      };
    },
    dueDateFilterChanged: (state, action) => {
      let { dueDate, changeType } = action.payload;
      const { dueDates } = state;

      switch (changeType) {
        case 'added': {
          if (dueDates.includes(dueDate)) {
            // This color already is set as a filter. Don't change the state.
            return state;
          }

          return {
            ...state,
            dueDates: state.colors.concat(dueDate),
          };
        }
        case 'removed': {
          return {
            ...state,
            dueDates: state.dueDate.filter((due) => due !== dueDate),
          };
        }
        default:
          return state;
      }
    },
  },
});

export const { statusFilterChanged, dueDateFilterChanged } =
  filterSlice.actions;

export default filterSlice.reducer;
