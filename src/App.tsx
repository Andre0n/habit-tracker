const App = () => {
  return (
    <div className="flex h-screen w-screen flex-col justify-between gap-4 px-4 py-6 md:mx-auto md:w-1/2 lg:w-1/3 ">
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-medium">Habits</h1>
      </header>
      <main className="flex flex-1 flex-col">
        <section className="flex h-1/2 flex-col gap-4">
          <h2 className="text-md font-medium">In Progress Habit:</h2>
          <span className="text-center text-sm"> No habits in progress</span>
        </section>
        <section className="flex h-1/2 flex-col gap-4">
          <h2 className="text-md font-medium">Completed Habit:</h2>
          <span className="text-center text-sm">No completed habits</span>
        </section>
      </main>
      <footer>
        <nav className="flex justify-between">
          <button>Home</button>
          <button>Add</button>
          <button>Statitics</button>
        </nav>
      </footer>
    </div>
  );
};

export default App;
