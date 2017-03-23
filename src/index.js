import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import App from './components/App'

const initialState = {
  todos: []
}
const Store = createStore(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension())

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
