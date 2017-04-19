import { connect } from 'react-redux';
import { AppComponent } from './app.component';

import { SET_LOGIN_DATA } from '../../config/actions';
import { getStoreUserLogin } from '../../device-storage/login';


const mapStateToProps = (state) => {
  return {}
}


const mapDispatchToProps = (dispatch) => {
  return {
    async getStoredUserLogin() {
      const data = await getStoreUserLogin();

      if (data && data.email) {
        dispatch({
          type: SET_LOGIN_DATA,
          isUserLogged: false,
          email: data.email,
          password: data.password
        });
      }
    }
  }
}


export const AppConteiner = connect(
  mapStateToProps,
  mapDispatchToProps
) (AppComponent);
