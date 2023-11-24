// eslint-disable-next-line react/prop-types
const TodoActions = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto mt-8 px-4">
      <div className="flex justify-center gap-4 bg-white p-4 rounded-md text-gray-500 font-semibold dark:bg-gray-800 transition-all duration-1000">
        <button
          className={`${
            filter === "all"
              ? "text-blue-500"
              : "text-gray-400 hover:text-blue-700"
          }`}
          onClick={() => changeFilter("all")}
        >
          All
        </button>
        <button
          className={`${
            filter === "active"
              ? "text-blue-500"
              : "text-gray-400 hover:text-blue-700"
          }`}
          onClick={() => changeFilter("active")}
        >
          Active
        </button>
        <button
          className={`${
            filter === "completed"
              ? "text-blue-500"
              : "text-gray-400 hover:text-blue-700"
          }`}
          onClick={() => changeFilter("completed")}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoActions;
