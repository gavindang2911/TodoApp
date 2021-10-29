import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../data';
import { removeTodos, completeTodos, updateTodos } from '../redux/reducer';

const TodoItem = ({ id, title, status, description, dueDate }) => {
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const [todo, setTodo] = useState({
    id: id,
    title: title,
    description: description,
    completed: status,
    dueDate: dueDate,
  });

  const handleDeleteClick = () => {
    dispatch(removeTodos({ id: id }));
  };

  const handleCompleClick = () => {
    dispatch(completeTodos({ id, completed: !status }));
  };

  const update = (e) => {

    if (e.which === 13) {
      e.preventDefault();
      //here 13 is key code for enter key
      setIsDisabled(!isDisabled);
      dispatch(updateTodos({ id: id, todo: todo }));
    }
  };

  return (
    <li
      className={`list-group-item ${
        status && 'list-group-item-success'
      } mb-3 mr-sm-2`}
    >
      <div className="d-flex justify-content-between">
        <textarea
          defaultValue={title}
          disabled={isDisabled}
          style={{ border: 'none', background: 'transparent' }}
          onChange={(event) =>
            setTodo({
              ...todo,
              title: event.target.value,
            })
          }
          onKeyPress={(e) => update(e)}
        />
        {/* <textarea style={{ border:"none" }}>{title}</textarea> */}
        <textarea
          defaultValue={description}
          disabled={isDisabled}
          style={{ border: 'none', background: 'transparent' }}
          onChange={(event) =>
            setTodo({
              ...todo,
              description: event.target.value,
            })
          }
          onKeyPress={(e) => update(e)}
        />

        <div>
          <button
            className="btn btn-primary"
            style={{ marginRight: '10px' }}
            onClick={handleCompleClick}
          >
            Done
          </button>
          <button className="btn btn-danger" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
