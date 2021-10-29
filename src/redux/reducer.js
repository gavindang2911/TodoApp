import { createSlice } from "@reduxjs/toolkit";
import List from '../data';
import { useSelector } from 'react-redux';



const todoSlice  = createSlice({
  name: "todos",
  initialState: [
    // {
    //     id: 1,
    //     title: 'todo1',
    //     description: 'body1',
    //     completed: true,
    //     dueDate: 'Nov 1st',
    //   },
    //   {
    //     id: 2,
    //     title: 'todo2',
    //     description: 'body2',
    //     completed: true,
    //     dueDate: 'Nov 2st',
    //   },
    //   {
    //     id: 3,
    //     title: 'todo5',
    //     description: 'body3',
    //     completed: false,
    //     // status: {
    //     //   todo: true,
    //     //   inProgress: false,
    //     //   completed: false,
    //     // },
    //     dueDate: 'Nov 3st',
    //   },
  ],
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
      // List.removeList(stnewState);
      List.saveList(state.filter((item) => item.id !== action.payload.id));
      return state.filter((item) => item.id !== action.payload.id);
    },


    // //update todos
    // updateTodos: (state, action) => {
    //   return state.map((todo) => {
    //     if (todo.id === action.payload.id) {
    //       return {
    //         ...todo,
    //         item: action.payload.item,
    //       };
    //     }
    //     return todo;
    //   });
    // },
    // //completed
    // completeTodos: (state, action) => {
    //   return state.map((todo) => {
    //     if (todo.id === action.payload) {
    //       return {
    //         ...todo,
    //         completed: true,
    //       };
    //     }
    //     return todo;
    //   });
    // },
  },
});

export const {
  addAll,
  addTodos,
  removeTodos,
//   updateTodos,
//   completeTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
