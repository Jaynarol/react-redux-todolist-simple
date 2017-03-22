import { ADD_TODO_ITEM, REMOVE_TODO_ITEM, TOGGLE_TODO_ITEM } from './types'

const addTodoItem = text => ({
  type: ADD_TODO_ITEM,
  payload: { text }
})

const removeTodoItem = id => ({
  type: REMOVE_TODO_ITEM,
  payload: { id }
})

const toggleTodoItem = id => ({
  type: TOGGLE_TODO_ITEM,
  payload: { id }
})

export {
  addTodoItem,
  removeTodoItem,
  toggleTodoItem
}