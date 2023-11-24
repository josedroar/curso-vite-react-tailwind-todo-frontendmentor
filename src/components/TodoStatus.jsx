/* eslint-disable react/prop-types */
const TodoStatus = ({ pendingTodos, clearCompleted }) => {
  return (
    <section className="flex justify-between py-4 px-4 items-center text-gray-400 bg-white rounded-b-md dark:bg-gray-800 transition-all duration-1000">
      <span className="">{pendingTodos} items left</span>
      <button onClick={clearCompleted}>Clear Completed</button>
    </section>
  );
};

export default TodoStatus;
