import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducer';
import filterReducer from './filterReducer';

export default configureStore({
  reducer: {
    todos: todoReducer,
	  filters: filterReducer,
  },
});
