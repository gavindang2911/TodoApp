import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../data';
import { removeTodos } from '../redux/reducer';

const TodoItem = ({ id, title, status, description, dueDate }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(removeTodos({ id: id }));
  };


  return (
    <li
      className={`list-group-item ${
        status && 'list-group-item-success'
      } mb-3 mr-sm-2`}
    >
      <div className="d-flex justify-content-between">
        <span className=" align-items-center">{title}</span>
        <div>
          <button className="btn btn-primary" style={{ marginRight: '10px' }}>
            Done
          </button>
          <button className="btn btn-danger" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>

      <span>{description}</span>
    </li>
  );
};

export default TodoItem;
