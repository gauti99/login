import React, { useState } from "react";
import Navbar from "../component/Navbar/Navbar";

const List = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const isDuplicate = todos.some(
      (todo) => todo.text.toLowerCase() === inputValue.toLowerCase()
    );
    if (isDuplicate) {
      alert("This todo already exists!");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setInputValue(todoToEdit.text);
    setEditId(id);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const isDuplicate = todos.some(
      (todo) => todo.text.toLowerCase() === inputValue.toLowerCase() && todo.id !== editId
    );
    if (isDuplicate) {
      alert("This todo already exists!");
      return;
    }

    setTodos(
      todos.map((todo) =>
        todo.id === editId ? { ...todo, text: inputValue } : todo
      )
    );
    setInputValue("");
    setEditId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Todo List</h1>
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <form onSubmit={editId ? saveEdit : addTodo} className="flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={editId ? "Edit your todo..." : "Add a new todo..."}
              className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-r-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              {editId ? "Save" : "Add"}
            </button>
          </form>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No todos yet. Add one above!</p>
          ) : (
            <ul className="space-y-3">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className={`p-4 rounded-lg flex items-center justify-between transition-all duration-200 ${
                    todo.completed ? "bg-green-50" : "bg-gray-50 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleComplete(todo.id)}
                      className="h-5 w-5 text-blue-500 rounded focus:ring-blue-500 cursor-pointer"
                    />
                    <span
                      className={`text-lg ${
                        todo.completed ? "line-through text-gray-400" : "text-gray-800"
                      }`}
                    >
                      {todo.text}
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => startEdit(todo.id)}
                      className="text-yellow-500 hover:text-yellow-600 transition duration-200"
                    >
                      edit
                    </button>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-red-500 hover:text-red-600 transition duration-200"
                    >
                      delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
