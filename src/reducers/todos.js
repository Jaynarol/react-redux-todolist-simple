import { ADD_TODO_ITEM, REMOVE_TODO_ITEM, TOGGLE_TODO_ITEM } from '../actions/types'

const initialState = []

const todosReducer = (todos = initialState, action) => {
  switch (action.type) {

    case ADD_TODO_ITEM: {
      return [
        ...todos,
        {
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          text: action.payload.text,
          finish: false
        }
      ]
    }

    case REMOVE_TODO_ITEM: {
      return todos.filter(todo => todo.id !== action.payload.id)
    }

    case TOGGLE_TODO_ITEM: {
      return todos.map(todo => todo.id !== action.payload.id ? todo : { ...todo, finish: !todo.finish })
    }

    default: {
      return todos
    }
  }
}

export default todosReducer