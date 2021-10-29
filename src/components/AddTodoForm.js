import React, { useState } from 'react';
import { addTodos } from '../redux/reducer';
import { useDispatch } from 'react-redux';
import List from '../data';

const AddTodoForm = (props) => {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoBody, setTodoBody] = useState('');
  const [todoDue, setTodoDue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoTitle === '') {
      alert('Input is Empty');
    } else {
      dispatch(
				addTodos({
					id: Math.floor(Math.random() * 1000),
          title: todoTitle,
          description: todoBody,
          completed: false,
          dueDate: todoDue,
				})
			);

      setTodoTitle('');
      setTodoBody('');
      setTodoDue('');
    }
    // event.preventDefault();
    // setTodoTitle([...todoTitle, { title: todoTitle, complete: false }]);
    // setTodoBody([...todoBody, { body: todoBody, complete: false }]);
    // console.log(todoTitle);
    // console.log(todoBody);
    // TODO
  };



  return (
    <div
      style={{
        borderRadius: '0.2rem',
        backgroundColor: '#ddd',
        padding: '20px',
        boxShadow: '0.1rem 0.1rem 0.4rem #aaaaaa',
      }}
    >

        <div style={{ display: 'flex', height: '50px' }}>
          <input
            type="text"
            className="form-control mb-3 mr-sm-3"
            placeholder="Add todo title..."
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
          ></input>
          <span style={{ margin: '62px' }}></span>
          <input
            type="text"
            className="form-control mb-3 mr-sm-3"
            placeholder="Add due date..."
            value={todoDue}
            onChange={(event) => setTodoDue(event.target.value)}
          ></input>
        </div>

        <input
          type="text"
          className="form-control mb-2 mr-sm-2 "
          placeholder="Add todo description..."
          value={todoBody}
          onChange={(event) => setTodoBody(event.target.value)}
          style={{ height: '80px' }}
        ></input>

        <button onClick={handleSubmit} className="btn btn-primary mb-2">
          Submit
        </button>

    </div>
  );
};


export default AddTodoForm;
// export default AddTodoForm;
