import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  // Add a new Todo
  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, input]);
    setInput('');
  };

  // Delete a Todo
  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  // Edit an existing Todo
  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  const saveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = editText;
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div className="App">
      <h1>📝 My Todo List</h1>
      
      <div>
        {/* Add Todo */}
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {/* If editing, show input box for editing */}
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </div>
            ) : (
              <span>{todo}</span>
            )}

            {/* Delete Button */}
            <button onClick={() => removeTodo(index)}>❌</button>
            {/* Edit Button */}
            <button onClick={() => startEdit(index)}>✏️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
