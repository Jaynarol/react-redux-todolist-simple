import { connect } from 'react-redux'
import TodoInput from './TodoInput'
import { addTodo } from '../../actions/todos'

const mapActionToProps = { addTodo }

export default connect(null, mapActionToProps)(TodoInput)