import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from './components/todos/TodoList';
import List from './data';
import { addAll, deleteAll } from './redux/reducer';
import Footer from './components/footer/Footer';

function App() {
  const dispatch = useDispatch();
  const todoListFromLocalStorage = List.getList();

  useEffect(() => {
    dispatch(deleteAll());
    dispatch(addAll(todoListFromLocalStorage));
  }, [])

  return (
    <div
      className="container p-4 mt-3"
      style={{
        borderRadius: '0.2rem',
        boxShadow: '0.1rem 0.1rem 0.4rem #aaaaaa',
      }}
    >
      <Footer/>
      <h2> What's the Plan for Today </h2>

      <AddTodoForm />
      <TodoList />

    </div>
  );
}

export default App;
