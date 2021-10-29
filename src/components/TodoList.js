import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import List from '../data';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DragHandle from './DragHandle';
import { useSelector, useDispatch } from 'react-redux';
import { addAll } from '../redux/reducer';

const TodoList = () => {
  const todoList = List.getList();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAll(todoList));
    console.log('asdf')
  }, [])
  const todos = useSelector((state) => state.todos);

  // const [todos, setTodos] = useState(List.getList()); // 3
  // useEffect(() => {
  //   List.getList()
  // }, [todos]);

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
                {todos
                  ? todos.map((todo, i) => (
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
                    ))
                  : <div></div>}
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
