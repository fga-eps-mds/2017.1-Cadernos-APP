import update from 'immutability-helper';

import initialState from '../config/initial-state';
import Actions from '../config/actions';
import { storeUserLogin } from '../device-storage/login';


const loginReducer = (state=initialState.login, action) => {
  switch(action.type) {

    case Actions.login.TOGGLE_REMEMBER_LOGIN:
      return update(state, {
        rememberLogin: {
          $set: !state.rememberLogin
        }
      });


    case Actions.login.SET_LOGIN_DATA:
      storeUserLogin(state.rememberLogin, action.email, action.password);

      return update(state, {
        isUserLogged: {$set: state.isUserLogged},
        email: {$set: action.email},
        password: {$set: action.password}
      });


    default:
      return state;
  }
}

export default loginReducer;
