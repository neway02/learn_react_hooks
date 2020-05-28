import React, { useState } from 'react'
import TodoList from './TodoList'

export default function App() {

  const [todos, setTodos] = useState([
    {id: 1, title: 'First todo', completed: false},
    {id: 2, title: 'Second todo', completed: true},
    {id: 3, title: 'Third todo', completed: true},
  ])

  return (
    <div className="container">
      <h1>Todo app</h1>

        <div className="input-field">
          <input type="text" />
          <label>Todo name</label>
        </div>

        <TodoList todos={todos} />
    </div>
  );
}