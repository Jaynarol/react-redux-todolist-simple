import React, { PropTypes } from 'react'
import './style.css'

const TodoItem = ({ id, text, finish, removeTodoItem, toggleTodoItem }) => {
  const labelId = `todoitem-${id}`
  const finishClass = finish ? 'finish' : 'unfinish'

  return (
    <li>
      <label htmlFor={labelId} className={finishClass} >
        <input id={labelId} type="checkbox" checked={finish} onChange={() => toggleTodoItem(id)} />
        {text}
      </label>
      <button className="removeButton" onClick={() => removeTodoItem(id)}>X</button>
    </li>
  )
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  finish: PropTypes.bool.isRequired,
  removeTodoItem: PropTypes.func.isRequired,
  toggleTodoItem: PropTypes.func.isRequired
}

export default TodoItem