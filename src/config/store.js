import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import initialState from './initial-state';

import userReducer from '../reducers/user';

const reducers = combineReducers({
  user: userReducer,
});

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;