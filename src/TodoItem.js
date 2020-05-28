import React, {useState} from 'react'

export default function TodoItem({title, id, completed}) {

  const [checked, setChecked] = useState(completed)

  return (
    <li className="todo">
      <label>
        <input
          type="checkbox"
          defaultChecked={false}
          checked={checked}
          onChange={() => setChecked()}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
        >
          delete
        </i>
      </label>
    </li>
  )
}