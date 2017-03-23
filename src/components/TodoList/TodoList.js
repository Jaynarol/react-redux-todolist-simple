import React, { PropTypes } from 'react'
import TodoItem from '../TodoItem'
import './style.css'

const TodoList = ({ todos }) => (
  <ul className="todolist">
    {
      todos.map(todo =>
        <TodoItem key={todo.id} {...todo} />)
    }
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      finish: PropTypes.bool.isRequired
    }),
  ).isRequired
}

export default TodoList