import { AsyncStorage } from 'react-native';


export async function storeUserLogin(rememberLogin=false, email="", password="") {
  let data = {
    email: rememberLogin ? email : "",
    password: rememberLogin ? password : ""
  }

  try {
    await AsyncStorage.setItem('CadernosApp:userLogin', JSON.stringify(data));
  } catch(err) {
    console.error("Could not store user email and password", err);
  }
}


export async function getStoreUserLogin() {
  try {
    const  storedData = await AsyncStorage.getItem('CadernosApp:userLogin');
    return JSON.parse(storedData);
  } catch(err) {
    console.error("Could not get stored user email and password", err);
    return {email: "", password: ""};
  }
}
