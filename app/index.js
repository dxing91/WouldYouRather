import React from 'react'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import { hashHistory } from 'react-router'
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom'
import * as reducers from 'store'
import getRoutes from './config/routes'

import 'style/main.scss'

const store = createStore(combineReducers({...reducers, routing: routerReducer}), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
))

const history = syncHistoryWithStore(hashHistory, store)

function checkAuth(nextState, replace) {
  const { isAuthed, isFetching } = store.getState().users
  
  if (isFetching) return
  
  const nextPath = nextState.location.pathname
  if (nextPath == '/' || nextPath == '/authenticate') {
    if (isAuthed) replace('/list')
  } else {
    if (!isAuthed) replace('/authenticate')
  }
}

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(history, checkAuth)}
  </Provider>,
  document.getElementById('app')
)
