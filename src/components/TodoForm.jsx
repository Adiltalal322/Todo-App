import { useState } from "react";
import { v4 as uuid } from "uuid";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("Please Enter value");
    }
    const newTodo = {
      title: title,
      completed: false,
      id: uuid(),
    };
    addTodo(newTodo);
    setTitle("");
  }
  return (
    <div className="flex items-center justify-center mt-4">
      <form onSubmit={handleSubmit} className="w-full h-full">
        <div className="bg-white border border-gray-600 rounded-xl w-full flex justify-between h-12 overflow-hidden">
          <input
            type="text"
            value={title}
            className="border border-gray-600 w-full h-full border-none rounded-l-xl pl-2"
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            type="submit"
            className="bg-purple-500 text-white rounded-r-xl p-1 w-20"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
