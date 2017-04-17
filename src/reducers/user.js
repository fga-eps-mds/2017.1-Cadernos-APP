import update from 'immutability-helper';

import initialState from '../config/initial-state';
import Actions from '../config/actions';


const userReducer = (state=initialState.user, action) => {
  switch(action.type) {
    case Actions.User.SET_USER:
      return update(state, {
        $set: {
          id: action.id,
          name: action.name,
          email: action.email,
          auth_token: action.auth_token,
          errors: action.errors
        }
      });


    case Actions.User.SET_USER_ERRORS:
      return update(state, {
        errors: {
          $set: action.errors
        }
      });


    case Actions.User.TOGGLE_USER_REMEMBER_LOGIN:
      return update(state, {
        rememberLogin: {
          $set: !state.rememberLogin
        }
      });


    default:
      return state;
  }
}

export default userReducer;
