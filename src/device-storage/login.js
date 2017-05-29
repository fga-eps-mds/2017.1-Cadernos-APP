import { AsyncStorage } from 'react-native';

import initialState from '../config/initial-state';

const STORE_KEYS = {
  login: 'deviceStorage:userLogin'
};


export async function setStoredUserLogin({
  rememberLogin=initialState.login.remember,
  email="",
  password=""
}) {
  const data = {
    email: rememberLogin ? email : "",
    password: rememberLogin ? password : ""
  }

  try {
    await AsyncStorage.setItem(STORE_KEYS.login, JSON.stringify(data));
  } catch(err) {
    console.log("Could not store user email and password");
    console.log(err);
  }
}


export async function getStoredUserLogin() {
  try {
    const  storedData = await AsyncStorage.getItem(STORE_KEYS.login);

    return JSON.parse(storedData);
  } catch(err) {
    console.error("Could not get stored user email and password");
    console.log(err);

    return {email: "", password: ""};
  }
}
