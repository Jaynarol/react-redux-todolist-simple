import { connect } from 'react-redux'
import TodoInput from './TodoInput'
import { addTodoItem } from '../../actions/todos'

const mapStateToProps = null
const mapDispatchToProps = { addTodoItem }

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)