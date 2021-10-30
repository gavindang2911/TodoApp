import { createSlice } from "@reduxjs/toolkit";

import List from '../data';



const todoSlice  = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addAll: (state, action) => {
      // const init = [];
      // state = undefined;
      const todos = action.payload;
      state.push(...todos);
    },
    deleteAll: () => {
      const initialState= [];
      return initialState;
    },
    deleteAllLocalStorage: () => {
      const initialState= [];
      List.removeAllList();
      return initialState;
    },
    //Adding todos
    addTodos: (state, action) => {
        const todo = {
            id: action.payload.id,
            title: action.payload.title,
            description: action.payload.description,
            status: action.payload.status,
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
    // all completed


    // //completed
    completeTodos: (state, action) => {
      List.saveList(state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            status: action.payload.status,
          };
        }
        return todo;
      }));
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            status: action.payload.status,
          };
        }
        return todo;
      });
    },

    // inProgressSelected: (state, action) => {
    //   const { inProgress, todoId } = action.payload
    //   // const inProgress = action.payload.inProgress
    //   // const id = action.payload.id
    //   return state.map((todo) => {
    //     if (todo.id !== todoId) {
    //       return todo
    //     }
    //     return {
    //       ...todo,
    //       inProgress,
    //     }
    //   })
    // }
  },
});

export const {
  addAll,
  deleteAll,
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
  deleteAllLocalStorage,
} = todoSlice.actions;

export default todoSlice.reducer;
