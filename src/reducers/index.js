import { combineReducers } from 'redux'
import todosReducers from './todos'

const rootReducer = combineReducers({
  todos: todosReducers
})

export default rootReducer