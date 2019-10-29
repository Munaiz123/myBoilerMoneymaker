import {createStore, applyMiddleware} from 'redux'
import initialReducer from './redux/index'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'

const store = createStore(
  initialReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store
