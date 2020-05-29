import React, { useState, useEffect, useReducer } from 'react'
import TodoList from './TodoList'
import {Context} from './context'
import reducer from './reducer'

export default function App() {

  const [todoTitle, setTodoTitle] = useState('')
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')))

  const addTodo = (e) => {
    if(e.key === "Enter") {
      dispatch({
        type: 'add',
        payload: todoTitle
      })
      setTodoTitle('');
    }
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
   }, [state])

  return (
      <Context.Provider value={{
        dispatch
      }}>
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

            <TodoList todos={state} />
        </div>
      </Context.Provider>
  );
}