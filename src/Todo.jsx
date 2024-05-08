import React, { useState } from 'react';
import './Todo.css'

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
    else{
      
    }
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditValue(todos[index].text);
  };

  const handleUpdateTodo = () => {
    const newTodos = [...todos];
    newTodos[editIndex].text = editValue;
    setTodos(newTodos);
    setEditIndex(null);
    setEditValue('');
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1 className='hs'>Todo List</h1>
      <div>
        <input
          type="text"
          value={editIndex !== null ? editValue : inputValue}
          onChange={(e) => {
            if (editIndex !== null) {
              setEditValue(e.target.value);
            } else {
              handleInputChange(e);
            }
          }}
          placeholder="Enter a new todo"
        />
        {editIndex !== null ? (
          <button onClick={handleUpdateTodo}>Update</button>
        ) : (
          <button onClick={handleAddTodo}>Add</button>
        )}
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggleComplete(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleEditTodo(index)}>Edit</button>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
