import { connect } from 'react-redux'
import TodoList from './TodoList'

const mapStateToProps = ({ todos }) => ({ todos })
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)