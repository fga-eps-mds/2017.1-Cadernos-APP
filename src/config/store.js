import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import initialState from './initial-state';

import userReducer from '../reducers/user';
import bookReducer from '../reducers/book-reducer';

const reducers = combineReducers({
  user: userReducer,
  book: bookReducer
});

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;