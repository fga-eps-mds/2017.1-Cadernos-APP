import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import initialState from './initial-state';

import {
  bookListReducer,
  bookReducer,
  userReducer,
  taskReducer,
  taskListReducer
} from '../reducers';

const reducers = combineReducers({
  user: userReducer,
  book: bookReducer,
  bookList: bookListReducer,
  task: taskReducer,
  taskList: taskListReducer
});

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
