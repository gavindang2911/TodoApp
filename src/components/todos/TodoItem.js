import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../../data';
import { removeTodos, completeTodos, updateTodos, inProgressSelected } from '../../redux/reducer';

const availableStatus = ['To do', 'In Progress', 'Completed'];

const TodoItem = ({ id, title, status, description, dueDate }) => {
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const [todo, setTodo] = useState({
    id: id,
    title: title,
    description: description,
    status: status,
    dueDate: dueDate,
  });
  console.log(todo);

  const handleDeleteClick = () => {
    dispatch(removeTodos({ id: id }));
  };

  // const handleCompleClick = () => {
  //   dispatch(completeTodos({ id, status: 'Completed' }));
  // };

  const update = () => {

    // if (e.which === 13) {
    //   e.preventDefault();
    //   //here 13 is key code for enter key
    //   setIsDisabled(!isDisabled);
    //   dispatch(updateTodos({ id: id, todo: todo }));

    // }
    // setIsDisabled(!isDisabled);
      dispatch(updateTodos({ id: id, todo: todo }));
  };
  const handleStatusChanged = (e) => {
    const status = e.target.value;
    setTodo({...todo, status: status})
    dispatch(updateTodos({ id: id, todo: {...todo, status: status }}));
  }

  const statusOptions = availableStatus.map((status) => (
    <option key={status} value={status}>
      {status}
    </option>
  ))

  return (
    //zsffffffffffffffffffffffffffffffffffffffffffffffffff
    <li
      className={`list-group-item ${status==='In Progress' ?'list-group-item-primary':''}${status==='Completed' ? 'list-group-item-success':''} mb-3 mr-sm-2`}
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
          // onKeyPress={(e) => update(e)}
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
          // onKeyPress={(e) => update(e)}
        />

        <div>
          <select
            value={todo.status}
            // style={{ color }}
            onChange={handleStatusChanged}
            style={{ marginRight: '10px' }}
          >
            {/* <option value=""></option> */}
            {statusOptions}
          </select>
          <button
            className="btn btn-primary"
            style={{ marginRight: '10px' }}
            onClick={update}
          >
            Update
          </button>
          {/* <button
            className="btn btn-primary"
            style={{ marginRight: '10px' }}
            onClick={handleCompleClick}
          >
            Done
          </button> */}
          <button className="btn btn-danger" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
