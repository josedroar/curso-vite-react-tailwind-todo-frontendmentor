/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoForm = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();

    if (title.trim().length > 0) {
      createTodo(title);

      setTitle("");
    }

    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="flex gap-4 items-center bg-white rounded-md overflow-hidden py-3 px-4 dark:bg-gray-800 transition-all duration-1000"
    >
      <span className="h-5 w-5 rounded-full border-2 inline-block"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full text-gray-800 outline-none dark:bg-gray-800 transition-all duration-1000"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
