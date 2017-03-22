import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import { removeTodoItem, toggleTodoItem } from '../../actions/todos'

const mapStateToProps = (state, props) => ({ ...props })
const mapDispatchToProps = { removeTodoItem, toggleTodoItem }

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)