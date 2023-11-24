/* eslint-disable react/prop-types */
import React from "react";
import IconCheck from "./icons/IconCheck";
import CrossIcon from "./icons/IconCross";


// eslint-disable-next-line react/display-name
const TodoItem = React.forwardRef(({ todo, removeTodo, updateTodo, ...props }, ref) => {
  const { id, title, completed } = todo;
  return (
    <article {...props} ref={ref} className="flex gap-4 py-4 px-4 items-center border-b">
      {/* <button className="h-5 w-5 rounded-full border-2 inline-block"></button> */}
      <button
        className={`h-5 w-5 rounded-full ${
          completed
            ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : " border-2 inline-block"
        }`}
        onClick={() => updateTodo(id)}
      >
        <IconCheck stroke={`${completed ? "#FFF" : "none"}`} />
      </button>
      <p
        className={`text-gray-500 grow ${
          completed ? "line-through text-gray-300" : ""
        }`}
      >
        {title}
      </p>
      <button onClick={() => removeTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
});

export default TodoItem;
