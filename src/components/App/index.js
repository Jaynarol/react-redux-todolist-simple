import React, { Component } from 'react'
import logo from './assets/logo.svg'
import TodoInput from '../TodoInput'
import TodoList from '../TodoList'
import './style.css'

class App extends Component {

  state = {
    todos: [],
  }

  addTodoItem = text => {
    const todos = this.state.todos

    this.setState({
      todos: [
        ...todos,
        {
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          text,
          finish: false,
        },
      ],
    })
  }

  toggleTodoFinish = id => {
    this.setState({
      todos: this.state.todos.map(todo => todo.id === id ? { ...todo, finish: !todo.finish } : todo),
    })
  }

  removeTodoItem = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <TodoInput handleTodoItem={this.addTodoItem} />
          <TodoList {...this.state} handleToggleFinish={this.toggleTodoFinish} handleRemoveItem={this.removeTodoItem} />
        </div>
      </div>
    )
  }
}

export default App
