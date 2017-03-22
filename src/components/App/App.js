import React from 'react'
import logo from './assets/logo.svg'
import TodoInput from '../TodoInput'
import TodoList from '../TodoList'
import './style.css'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div className="App-intro">
      <TodoInput />
      <TodoList />
    </div>
  </div>
)

export default App
