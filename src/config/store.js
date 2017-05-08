import { createStore, combineReducers } from 'redux';

import initialState from './initial-state';

import userReducer from '../reducers/user';

const reducers = combineReducers({
  user: userReducer,
});

const store = createStore(reducers, initialState);

export default store;