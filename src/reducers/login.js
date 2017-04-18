import update from 'immutability-helper';
import { AsyncStorage } from 'react-native';

import initialState from '../config/initial-state';
import Actions from '../config/actions';

async function verifyRememberUserLogin(loginState, email="", password="") {
  let data = {
    email: loginState.rememberLogin ? email : "",
    password: loginState.rememberLogin ? password : ""
  }

  try {
    await AsyncStorage.setItem('CadernosApp:userLogin', JSON.stringify(data));
  } catch(err) {
    console.error("Could not store user email and password", err);
  }
}


const loginReducer = (state=initialState.login, action) => {
  switch(action.type) {

    case Actions.login.TOGGLE_REMEMBER_LOGIN:
      return update(state, {
        rememberLogin: {
          $set: !state.rememberLogin
        }
      });


    case Actions.login.SET_LOGIN_DATA:
      verifyRememberUserLogin(state, action.email, action.password);

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
