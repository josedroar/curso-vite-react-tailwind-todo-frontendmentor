/* eslint-disable react/prop-types */
import { Droppable, Draggable } from "@hello-pangea/dnd" 
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, updateTodo, }) => {
  return (
    <Droppable droppableId="todos" >
      {(droppableProvider) => (
        <div 
          className="bg-white rounded-t-md mt-8 dark:bg-gray-800 transition-all duration-1000"
          ref={droppableProvider.innerRef}
          {...droppableProvider.droppableProps}
          >
          {todos.map((todo, index) => (
            <Draggable 
              key={todo.id} 
              draggableId={`${todo.id}`}
              index={index}>
                {(draggableProvider) => (
                <TodoItem 
                  todo={todo} 
                  removeTodo={removeTodo} 
                  updateTodo={updateTodo} 
                  ref={draggableProvider.innerRef}
                  {...draggableProvider.dragHandleProps}
                  {...draggableProvider.draggableProps}
                  />
                )}
            </Draggable>
          ))}
          {droppableProvider.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;
