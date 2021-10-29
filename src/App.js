import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from './components/TodoList';
import List from './data';
import { addAll } from './redux/reducer';

function App() {
  const dispatch = useDispatch();
  const todoListFromLocalStorage = List.getList();

  useEffect(() => {
    dispatch(addAll(todoListFromLocalStorage));
  }, [])

  return (
    <div
      className="container p-5 mt-4"
      style={{
        borderRadius: '0.2rem',
        boxShadow: '0.1rem 0.1rem 0.4rem #aaaaaa',
      }}
    >
      <h1> What's the Plan for Today </h1>

      <AddTodoForm />
      <TodoList />

    </div>
  );
}

export default App;
