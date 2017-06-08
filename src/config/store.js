import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import initialState from './initial-state';

import {
  bookListReducer,
  bookReducer,
  userReducer,
  loginReducer,
  tasksReducer,
  singleTaskReducer,
  categoriesReducer,
  inspirationReducer
} from '../reducers';

const reducers = combineReducers({
  user: userReducer,
  book: bookReducer,
  bookList: bookListReducer,
  login: loginReducer,
  tasks: tasksReducer,
  singleTask: singleTaskReducer,
  categories: categoriesReducer,
  inspirations: inspirationReducer
});

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;