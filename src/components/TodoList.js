import React from 'react';
import TodoItem from './TodoItem'

const TodoList = () => {
  const todos = [
    {
      id: 1,
      title: 'todo1',
      description: 'body1',
      completed: true,
      dueDate: 'Nov 1st',
    },
    {
        id: 2,
        title: 'todo2',
        description: 'body2',
        completed: false,
        dueDate: 'Nov 2st',
    },
    {
        id: 3,
        title: 'todo3',
        description: 'body3',
        completed: false,
        // status: {
        //   todo: true,
        //   inProgress: false,
        //   completed: false,
        // },
        dueDate: 'Nov 3st',
      }
  ];

  return <div>
      <ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    status={todo.completed}
                    dueDate={todo.dueDate}
                    />
			))}
		</ul>
  </div>;
};

export default TodoList;
