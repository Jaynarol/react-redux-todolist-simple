import React, { PropTypes } from 'react'
import './style.css'

const TodoItem = ({ id, text, finish, removeTodo, toggleTodo }) => {
  const labelId = `todoitem-${id}`
  const finishClass = finish ? 'finish' : 'unfinish'

  return (
    <li>
      <label htmlFor={labelId} className={finishClass} >
        <input id={labelId} type="checkbox" checked={finish} onChange={() => toggleTodo(id)} />
        {text}
      </label>
      <button className="removeButton" onClick={() => removeTodo(id)}>X</button>
    </li>
  )
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  finish: PropTypes.bool.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoItem