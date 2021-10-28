import React from 'react';
import TodoItem from './TodoItem';
import List from '../data';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TodoList = () => {
  const todos = List.getList();

  return (
    <div>
        <DragDropContext
        onDragEnd={(param) => {
          const srcI = param.source.index;
          const desI = param.destination?.index;
          if (desI) {
            todos.splice(desI, 0, todos.splice(srcI, 1)[0]);
            List.saveList(todos);
          }
        }}
      >
        <ul className="list-group">
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
        </DragDropContext>

    </div>
  );
};

export default TodoList;
