import React, { Component, PropTypes } from 'react'

class TodoInput extends Component {

  state = {
    task: ''
  }

  handleInputEnter = event => {
    if (event.key === 'Enter' && this.state.task) {
      this.props.addTodo(this.state.task)
      this.setState({ task: '' })
    }
  }

  handleInputChange = event => {
    this.setState({ task: event.target.value })
  }

  render() {
    return (
      <input
        name="task"
        type="text"
        placeholder="type your task here!!"
        value={this.state.task}
        onKeyPress={this.handleInputEnter}
        onChange={this.handleInputChange}
      />
    )
  }
}

TodoInput.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoInput