import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { availableColors, capitalize } from '../filters/colors'
import {
  StatusFilters,
  //   colorFilterChanged,
  statusFilterChanged,
} from '../../redux/filterReducer';
// import {
//   completedTodosCleared,
//   allTodosCompleted,
//   selectTodos,
// } from '../todos/todosSlice'

// const RemainingTodos = ({ count }) => {
//   const suffix = count === 1 ? '' : 's'

//   return (
//     <div className="todo-count">
//       <h5>Remaining Todos</h5>
//       <strong>{count}</strong> item{suffix} left
//     </div>
//   )
// }

const StatusFilter = ({ value: status, onChange }) => {
  //All
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key]; //All Active Completed
    const handleClick = () => onChange(value);
    const className = value === status ? 'selected' : '';

    return (

        <li key={value} style={{display:"inline"}}>
          <button className={className} onClick={handleClick}>
            {key}
          </button>
        </li>

    );
  });

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  );
};

// const ColorFilters = ({ value: colors, onChange }) => {
//   const renderedColors = availableColors.map((color) => {
//     const checked = colors.includes(color)
//     const handleChange = () => {
//       const changeType = checked ? 'removed' : 'added'
//       onChange(color, changeType)
//     }

//     return (
//       <label key={color}>
//         <input
//           type="checkbox"
//           name={color}
//           checked={checked}
//           onChange={handleChange}
//         />
//         <span
//           className="color-block"
//           style={{
//             backgroundColor: color,
//           }}
//         ></span>
//         {capitalize(color)}
//       </label>
//     )
//   })

//   return (
//     <div className="filters colorFilters">
//       <h5>Filter by Color</h5>
//       <form className="colorSelection">{renderedColors}</form>
//     </div>
//   )
// }

const Footer = () => {
  const dispatch = useDispatch();

  //   const todosRemaining = useSelector((state) => {
  //     const uncompletedTodos = selectTodos(state).filter(
  //       (todo) => !todo.completed
  //     )
  //     return uncompletedTodos.length
  //   })

  const { status, dueDates } = useSelector((state) => state.filters);
  console.log(status);

  //   const onMarkCompletedClicked = () => dispatch(allTodosCompleted())
  //   const onClearCompletedClicked = () => dispatch(completedTodosCleared())

  //   const onColorChange = (color, changeType) =>
  //     dispatch(colorFilterChanged(color, changeType))

  const onStatusChange = (status) => dispatch(statusFilterChanged(status));

  return (
    <div style={{display:"flex"}}>
      <div className="actions">
        <h5>Actions</h5>
        <button className="btn btn-primary mb-2">Mark All Completed</button>
        <button className="btn btn-danger mb-2">Clear Completed</button>
      </div>

      {/* <RemainingTodos count={todosRemaining} /> */}
      <StatusFilter value={status} onChange={onStatusChange} />
      {/* <ColorFilters value={colors} onChange={onColorChange} /> */}
    </div>
  );
};

export default Footer;