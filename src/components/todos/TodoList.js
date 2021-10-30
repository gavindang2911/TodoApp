import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import List from '../../data';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DragHandle from '../DragHandle';
import { useSelector, useDispatch } from 'react-redux';
import { addAll, deleteAll } from '../../redux/reducer';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);


  const handleOnDragEnd = (param) => {
    const items = Array.from(todos);
    const [reoderedItem] = items.splice(param.source.index, 1);
    items.splice(param.destination.index, 0, reoderedItem);
    List.saveList(items);
    dispatch(deleteAll());
    dispatch(addAll(List.getList()));
  }


  return (
    <div>
      <DragDropContext
        onDragEnd={param => handleOnDragEnd(param)}
      >
        <ul className="list-group">
          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {todos.length > 0 && filters.status == "all"
                  ? todos.map((todo, i) => {
                    return (
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
                    )
                  })
                  : null}
                  {todos.length > 0 && filters.status == "active"
                  ? todos.map((todo, i) => {
                    return (
                      todo.completed === false &&
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
                    )
                  })
                  : null}
                  {todos.length > 0 && filters.status == "completed"
                  ? todos.map((todo, i) => {
                    return (
                      todo.completed === true &&
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
                    )
                  })
                  : null}
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
