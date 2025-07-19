import React, { useState } from 'react';

function TodoList() {
  // State for the list of todo items
  // Each todo now has an 'id', 'text', and 'completed' status
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React Fundamentals', completed: false },
    { id: 2, text: 'Practice JSX', completed: false },
    { id: 3, text: 'Understand Props', completed: false },
    { id: 4, text: 'Explore React Hooks', completed: false }
  ]);


  const [newTodoText, setNewTodoText] = useState('');

  const handleInputChange = (event) => {
    setNewTodoText(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodoItem = {

        id: todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1,
        text: newTodoText.trim(),
        completed: false
      };
      setTodos([...todos, newTodoItem]); 
      setNewTodoText(''); 
    }
  };


  const handleDeleteTodo = (idToDelete) => {
  
    const updatedTodos = todos.filter(todo => todo.id !== idToDelete);
    setTodos(updatedTodos); 
  };


  const handleToggleComplete = (idToToggle) => {

    const updatedTodos = todos.map(todo => {

      if (todo.id === idToToggle) {

        return { ...todo, completed: !todo.completed };
      }

      return todo;
    });
    setTodos(updatedTodos);
  };



  return (
    <div>
      <h2>Enhanced Todo List</h2>


      <div>
        <input
          type="text"
          value={newTodoText}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>


      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>

            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
              style={{ marginRight: '10px' }}
            />

            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flexGrow: 1 }}>
              {todo.text}
            </span>
            <button
              style={{
                marginLeft: '10px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '3px',
                cursor: 'pointer',
              }}

              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;