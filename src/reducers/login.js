import update from 'immutability-helper';

import initialState from '../config/initial-state';
import Actions from '../config/actions';


const loginReducer = (state=initialState.login, action) => {
  switch(action.type) {

    case Actions.login.TOGGLE_REMEMBER_LOGIN:
      return update(state, {
        rememberLogin: {
          $set: !state.rememberLogin
        }
      });


    case Actions.login.SET_LOGIN_ERROR:
      return update(state, {
        error: {
          $set: action.error
        }
      });


    case Actions.login.TOGGLE_SENDING_DATA_LOGIN:
      return update(state, {
        sendingData: {
          $set: !state.sendingData
        }
      });


    default:
      return state;
  }
}

export default loginReducer;
