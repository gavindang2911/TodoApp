import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StatusFilters, statusFilterChanged } from '../../redux/filterReducer';
import { deleteAllLocalStorage } from '../../redux/reducer';

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's';

  return (
    <div>
      <h5 style={{ marginBottom: '16px' }}>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  );
};

const StatusFilter = ({ value: status, onChange }) => {
  //All
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key]; //All Active Completed
    const handleClick = () => onChange(value);
    const className = value === status ? 'selected' : '';

    return (
      <li key={value} style={{ display: 'inline' }}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    );
  });

  return (
    <div className="filters statusFilters" style={{ marginRight: '20px' }}>
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  );
};

const Footer = () => {
  const dispatch = useDispatch();
  const todosRemaining = useSelector((state) => {
    const uncompletedTodos = state.todos.filter(
      (todo) => todo.status === 'To do'
    );
    return uncompletedTodos.length;
  });

  const { status, dueDates } = useSelector((state) => state.filters);


  const onClearCompletedClicked = (e) => {
    e.preventDefault();
    dispatch(deleteAllLocalStorage());
  };

  const onStatusChange = (status) => dispatch(statusFilterChanged(status));

  return (
    <div style={{ display: 'flex' }}>
      <div className="actions">
        <h5>Actions</h5>

        <button
          className="btn btn-danger mb-2"
          onClick={(e) => onClearCompletedClicked(e)}
        >
          Clear All Todos!
        </button>
      </div>

      <StatusFilter value={status} onChange={onStatusChange} />
      <RemainingTodos count={todosRemaining} />
      {/* <ColorFilters value={colors} onChange={onColorChange} /> */}
    </div>
  );
};

export default Footer;
