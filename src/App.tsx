const App = () => {
  return (
    <div className="flex flex-col gap-4 p-4 h-screen justify-between">
      <header>
        <h1 className="text-xl font-medium">Habits</h1>
      </header>
      <main className="flex flex-col flex-1">
        <section className="flex flex-col h-1/2 gap-4">
          <h2 className="text-md font-medium">In Progress Habit:</h2>
          <span className="text-sm text-center"> No habits in progress</span>
        </section>
        <section className="flex flex-col h-1/2 gap-4">
          <h2 className="text-md font-medium">Completed Habit:</h2>
          <span className="text-sm text-center">No completed habits</span>
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
