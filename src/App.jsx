import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-top bg-gray-100 min-h-screen">
      <header className="container mx-auto px-4 mb-4">
        <div className="flex justify-between py-8 text-white text-3xl font-bold tracking-[0.4em]">
          <h1 className="uppercase">Todo</h1>
          <button>
            <MoonIcon className="fill-blue-100" />
          </button>
        </div>
        <form className="flex gap-4 items-center bg-white rounded-md overflow-hidden py-3 px-4">
          <span className="h-5 w-5 rounded-full border-2 inline-block"></span>
          <input type="text" placeholder="Create a new todo..." className="w-full text-gray-800 outline-none" />
        </form>
      </header>
      <main className="container mx-auto px-4">
        <div className="bg-white rounded-md">
          <article className="flex gap-4 py-4 px-4 items-center border-b">
            <button className="h-5 w-5 rounded-full border-2 inline-block"></button>
            <p className="text-gray-500 grow">Complete online Javascript curse</p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 py-4 px-4 items-center border-b">
            <button className="h-5 w-5 rounded-full border-2 inline-block"></button>
            <p className="text-gray-500 grow">Complete online Javascript curse</p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 py-4 px-4 items-center border-b">
            <button className="h-5 w-5 rounded-full border-2 inline-block"></button>
            <p className="text-gray-500 grow">Complete online Javascript curse</p>
            <button>
              <CrossIcon />
            </button>
          </article>
          

          <section className="flex justify-between py-4 px-4 items-center text-gray-400">
            <span className="">5 items left</span>
            <button>Clear Completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto mt-8 px-4">
        <div className="flex justify-center gap-4 bg-white p-4 rounded-md text-gray-500 font-semibold">
          <button className="text-blue-700">All</button>
          <button className="hover:text-blue-700">Active</button>
          <button className="hover:text-blue-700">Completed</button>
        </div>
      </section>

      <p className="text-center text-gray-400 mt-10 font-semibold">Drag and drop to reorder list</p>
    </div>
  );
};

export default App;
