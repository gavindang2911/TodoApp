import React from 'react';
import TodoItem from './TodoItem';
import List from '../data';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DragHandle from './DragHandle';

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
          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {todos.map((todo, i) => (
                  <Draggable
                    key={todo.id}
                    draggableId={'draggable-' + todo.id}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={{
                          ...provided.draggableProps.style,
                          boxShadow: snapshot.isDragging
                            ? '0 0 .4rem #666'
                            : 'none',
                        }}
                      >
                        <DragHandle {...provided.dragHandleProps} />
                        <TodoItem
                          id={todo.id}
                          title={todo.title}
                          description={todo.description}
                          status={todo.completed}
                          dueDate={todo.dueDate}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ul>
      </DragDropContext>
    </div>
  );
};

export default TodoList;
