import { createSlice } from "@reduxjs/toolkit";
import List from '../data';



const todoSlice  = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addAll: (state, action) => {
      const todos = action.payload;
      state.push(...todos);
    },
    //Adding todos
    addTodos: (state, action) => {
        const todo = {
            id: action.payload.id,
            title: action.payload.title,
            description: action.payload.description,
            completed: action.payload.completed,
            dueDate: action.payload.dueDate,
        };
        state.push(todo);
        let todos = List.getList();
        todos.push(todo);
        List.saveList(todos);
        return state;
    },
    //remove todos
    removeTodos: (state, action) => {
      List.saveList(state.filter((item) => item.id !== action.payload.id));
      return state.filter((item) => item.id !== action.payload.id);
    },


    //update todos
    updateTodos: (state, action) => {
      List.saveList(state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload.todo;
        }
        return todo;
      }));
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload.todo;
        }
        return todo;
      });
    },

    // //completed
    completeTodos: (state, action) => {
      List.saveList(state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: action.payload.completed,
          };
        }
        return todo;
      }));
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: action.payload.completed,
          };
        }
        return todo;
      });

    },
  },
});

export const {
  addAll,
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
