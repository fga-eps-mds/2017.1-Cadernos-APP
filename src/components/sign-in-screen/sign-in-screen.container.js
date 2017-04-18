import { connect } from 'react-redux';
import { SignInScreenComponent } from './sign-in-screen.component';
import Actions from '../../config/actions';
import axios, { setAuthorizationToken } from '../../config/axios';


const mapStateToProps = (state) => {
  return {
    rememberLogin: state.login.rememberLogin,
    error: state.login.error,
    sendingData: state.login.sendingData
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    toggleRememberLogin() {
      dispatch({
        type: Actions.login.TOGGLE_REMEMBER_LOGIN
      });
    },


    toggleSendingData () {
      dispatch({
        type: Actions.login.TOGGLE_SENDING_DATA_LOGIN
      });
    },


    logUserIn(userData, callback) {
      axios.post("/authenticate", {
        email: userData.email,
        password: userData.password
      })
      .then(feddback => {
        if (feddback.status === 200) {
          setAuthorizationToken(feddback.data.auth_token);

          /*
          dispatch({
            type: Actions.login.SET_IS_LOGGED,
            logged: true
          });
          */

          callback(true);
        } else {
          console.error(new Error('Error on login status'));
          callback(false);
        }
      })
      .catch(err => {
        if (err.response && err.response.status === 401) {
          dispatch({
            type: Actions.login.SET_LOGIN_ERROR,
            error: err.response.data.error.user_authentication
          });
        } else {
          // Display a generic error message
        }

        callback(false);
      });
    }
  }
}


export const SignInScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (SignInScreenComponent);
