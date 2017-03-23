import TYPE from '../actions/types'

const initialState = []
const genarateNewTodo = function (todos, text) {
  return {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    text,
    finish: false
  }
}

const todosReducer = (todos = initialState, action) => {
  switch (action.type) {
    case TYPE.TODO.ADD: {
      return [...todos, genarateNewTodo(todos, action.payload.text)]
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

export default todosReducer