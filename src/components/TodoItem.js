import React from 'react';

const TodoItem = ({ id, title, status,description, dueDate }) => {
  return (
    <li className={`list-group-item ${status && 'list-group-item-success'} mb-3 mr-sm-2`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input type="checkbox" className="mr-3" checked={status}></input>
          {title}
        </span>
        <button className="btn btn-danger">Delete</button>
      </div>
      <div className="d-flex justify-content-between">
      <span>
        {description}
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
