import { connect } from 'react-redux'
import TodoList from './TodoList'

const mapStoreToProps = store => ({
  todos: store.todos
})

export default connect(mapStoreToProps)(TodoList)