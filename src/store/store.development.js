import {browserHistory} from 'react-router'
import {routerMiddleware} from 'react-router-redux'
import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import {middleware as fetch} from '../fetch'

import multi from './multi'
import promise from './promise'

const logger = createLogger({
  collapsed: true,
  duration: true
})

export default function configureStore (rootReducer, initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      routerMiddleware(browserHistory),
      fetch,
      multi,
      promise,
      thunkMiddleware,
      logger
    )
  )
}
