import { createStore, combineReducers } from 'redux';

import initialState from './initial-state';

import userReducer from '../reducers/user';
import loginReducer from '../reducers/login';

const reducers = combineReducers({
  user: userReducer,
  login: loginReducer
});

const store = createStore(reducers, initialState);

export default store;
