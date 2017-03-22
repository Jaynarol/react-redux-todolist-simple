import React, { PropTypes } from 'react'
import './style.css'

const TodoItem = ({ id, text, finish, handleToggleFinish, handleRemoveItem }) => {
  const handleFinish = () => handleToggleFinish(id)
  const handleRemove = () => handleRemoveItem(id)
  const labelId = `todoitem-${id}`
  const finishClass = finish ? 'finish' : 'unfinish'

  return (
    <li>
      <label htmlFor={labelId} className={finishClass} >
        <input id={labelId} type="checkbox" checked={finish} onChange={handleFinish} />
        {text}
      </label>
      <button className="removeButton" onClick={handleRemove}>X</button>
    </li>
  )
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  finish: PropTypes.bool.isRequired,
  handleToggleFinish: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
}

export default TodoItem