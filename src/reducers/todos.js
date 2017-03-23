import TYPE from '../actions/types'
import { initialStore } from '../store'

const createNewTodo = function (todos, text) {
  return {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    text,
    finish: false
  }
}

export default (todos = initialStore.todos, action) => {
  switch (action.type) {
    case TYPE.TODO.ADD: {
      return [...todos, createNewTodo(todos, action.payload.text)]
    }
    case TYPE.TODO.REMOVE: {
      return todos.filter(todo => todo.id !== action.payload.id)
    }
    case TYPE.TODO.TOGGLE: {
      return todos.map(todo => todo.id !== action.payload.id ? todo : { ...todo, finish: !todo.finish })
    }
    default: {
      return todos
    }
  }
}