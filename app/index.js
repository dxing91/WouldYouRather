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

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(history)}
  </Provider>,
  document.getElementById('app')
)
