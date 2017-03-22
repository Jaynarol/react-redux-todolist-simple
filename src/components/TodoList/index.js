import React, { PropTypes } from 'react'
import TodoItem from '../TodoItem'
import './style.css'

const TodoList = ({ todos, handleToggleFinish, handleRemoveItem }) => (
  <ul className="todolist">
    {
      todos.map(todo =>
        <TodoItem key={todo.id} {...todo} handleToggleFinish={handleToggleFinish} handleRemoveItem={handleRemoveItem} />)
    }
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      finish: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  handleToggleFinish: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
}

export default TodoList