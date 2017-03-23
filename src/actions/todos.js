import TYPE from './types'

const addTodoItem = text => ({
  type: TYPE.TODO.ADD,
  payload: { text }
})

const removeTodoItem = id => ({
  type: TYPE.TODO.REMOVE,
  payload: { id }
})

const toggleTodoItem = id => ({
  type: TYPE.TODO.TOGGLE,
  payload: { id }
})

export {
  addTodoItem,
  removeTodoItem,
  toggleTodoItem
}