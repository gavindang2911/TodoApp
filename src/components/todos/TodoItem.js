import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { removeTodos, updateTodos } from '../../redux/reducer';

const availableStatus = ['To do', 'In Progress', 'Completed'];

const TodoItem = ({ id, title, status, description, dueDate }) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: id,
    title: title,
    description: description,
    status: status,
    dueDate: dueDate,
  });

  const handleDeleteClick = () => {
    dispatch(removeTodos({ id: id }));
  };

  const update = () => {
    alert('Updated Successfully');
    dispatch(updateTodos({ id: id, todo: todo }));
  };
  const handleStatusChanged = (e) => {
    const status = e.target.value;
    setTodo({ ...todo, status: status });
    dispatch(updateTodos({ id: id, todo: { ...todo, status: status } }));
  };

  const statusOptions = availableStatus.map((status) => (
    <option key={status} value={status}>
      {status}
    </option>
  ));

  return (
    <li
      className={`list-group-item ${
        status === 'In Progress' ? 'list-group-item-primary' : ''
      }${status === 'Completed' ? 'list-group-item-success' : ''} mb-3 mr-sm-2`}
    >
      <div className="d-flex justify-content-between">
        <textarea
          defaultValue={title}
          style={{ border: 'none', background: 'transparent' }}
          onChange={(event) =>
            setTodo({
              ...todo,
              title: event.target.value,
            })
          }
        />
        <textarea
          defaultValue={description}
          style={{ border: 'none', background: 'transparent' }}
          onChange={(event) =>
            setTodo({
              ...todo,
              description: event.target.value,
            })
          }
        />

        <div>
          <select
            value={todo.status}
            onChange={handleStatusChanged}
            style={{ marginRight: '10px' }}
          >
            {statusOptions}
          </select>
          <button
            className="btn btn-primary"
            style={{ marginRight: '10px' }}
            onClick={update}
          >
            Update
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
