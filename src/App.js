import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if (input !== '') {
      todos.push(input);
      setTodos(todos); 
      setInput('');
    }
  };

  const removeTodo = (index) => {
    todos.splice(index, 1);
    setTodos(todos); 
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index]);
  };

  const saveEdit = () => {
    todos[editIndex] = editText;
    setTodos(todos);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <input
        type="text"
        placeholder="Add task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
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
            <button onClick={() => removeTodo(index)}>Delete</button>
            <button onClick={() => startEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
