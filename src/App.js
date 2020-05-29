import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'

export default function App() {

  const [todos, setTodos] = useState([
    {id: 1, title: 'First todo', completed: false},
    {id: 2, title: 'Second todo', completed: true},
    {id: 3, title: 'Third todo', completed: true},
  ])

  const [todoTitle, setTodoTitle] = useState('')

  const addTodo = (e) => {
    if(e.key === "Enter") {
      setTodos([
          ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false
        }
      ])
      setTodoTitle('');
    }
  }

  useEffect(() => {
    const raw = localStorage.getItem('todos') || '[]'
    setTodos(JSON.parse(raw))
   }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
   }, [todos])

  return (
    <div className="container">
      <h1>Todo app</h1>

        <div className="input-field">
          <input
              type="text"
              value={todoTitle}
              onChange={(e) => setTodoTitle(e.target.value)}
              onKeyPress={addTodo}
          />
          <label>Todo name</label>
        </div>

        <TodoList todos={todos} />
    </div>
  );
}