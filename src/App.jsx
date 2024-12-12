import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false,
      pinned: false,
      description: "",
    },
    {
      id: 2,
      title: "Learn Guitar",
      completed: true,
      pinned: false,
      description: "",
    },
    {
      id: 3,
      title: "Find Good waltz in Am",
      completed: false,
      pinned: false,
      description: "",
    },
  ]);

  const addTodo = (newTodo) => {
    setTodos((prevState) => [...prevState, newTodo]);
  };

  const toggleCompleted = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const togglePin = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, pinned: !todo.pinned } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const updateDescription = (id, description) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, description } : todo
      )
    );
  };

  const todoList = todos.filter((todo) => !todo.completed);
  const completeList = todos.filter((todo) => todo.completed);

  const hasPinnedTodos = todoList.some((todo) => todo.pinned);

  const sortedTodos = todoList.sort((a, b) => {
    if (a.pinned === b.pinned) {
      return a.title.localeCompare(b.title);
    }
    return b.pinned - a.pinned;
  });

  const finalSortedTodos = hasPinnedTodos
    ? sortedTodos
    : sortedTodos.sort((a, b) => a.title.localeCompare(b.title));

  const sortedCompletedTodos = completeList.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <>
      <div className="container">
        <h1 className="bg-[#FFCCFF90] text-[#5297ff] text-center text-3xl font-bold p-4 mt-4 rounded-xl">
          Todo App
        </h1>
        <TodoForm addTodo={addTodo} />
        <Todos
          todos={finalSortedTodos}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
          completeList={sortedCompletedTodos}
          togglePin={togglePin}
          updateDescription={updateDescription}
        />
      </div>
    </>
  );
}

export default App;
