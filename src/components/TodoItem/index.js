import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import { removeTodo, toggleTodo } from '../../actions/todos'

const mapStoreToProps = (_, props) => props
const mapActionToProps = { removeTodo, toggleTodo }

export default connect(mapStoreToProps, mapActionToProps)(TodoItem)