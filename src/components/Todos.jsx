import React from "react";
import Todo from "./Todo";

function Todos({
  todos,
  toggleCompleted,
  removeTodo,
  completeList,
  togglePin,
  updateDescription,
}) {
  return (
    <div>
      <h2 className="text-xl font-bold mt-6">Todo List</h2>
      <div>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            toggleCompleted={toggleCompleted}
            removeTodo={removeTodo}
            togglePin={togglePin}
            updateDescription={updateDescription}
          />
        ))}
      </div>

      <h2 className="text-xl font-bold mt-6">Completed List</h2>
      <div>
        {completeList.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            toggleCompleted={toggleCompleted}
            removeTodo={removeTodo}
            togglePin={togglePin}
            updateDescription={updateDescription}
          />
        ))}
      </div>
    </div>
  );
}

export default Todos;
