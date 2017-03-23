/* eslint-disable global-require */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer, { initialStore } from './store'
import App from './components/App'

const store = createStore(rootReducer, initialStore, window.devToolsExtension && window.devToolsExtension())
const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  )
}

render(App)
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(NextApp)
  })
  module.hot.accept('./store', () => {
    const NextRootReducer = require('./store').default
    store.replaceReducer(NextRootReducer)
  })
}
