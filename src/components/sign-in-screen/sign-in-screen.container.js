import { connect } from 'react-redux';
import { SignInScreenComponent } from './sign-in-screen.component';
import Actions from '../../config/actions';
import axios, { setAuthorizationToken } from '../../config/axios';


const mapStateToProps = (state) => {
  let userData = {
    email: state.login.rememberLogin ? state.login.email : "",
    password: state.login.rememberLogin ? state.login.password : ""
  }

  return {
    rememberLogin: state.login.rememberLogin,
    error: state.login.error,
    email: userData.email,
    password: userData.password
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    toggleRememberLogin() {
      dispatch({
        type: Actions.login.TOGGLE_REMEMBER_LOGIN
      });
    },


    logUserIn(userData, callback) {
      axios.post("/authenticate", {
        email: userData.email,
        password: userData.password
      })
      .then(feddback => {
        setAuthorizationToken(feddback.data.auth_token);

        dispatch({
          type: Actions.login.SET_LOGIN_DATA,
          isUserLogged: true,
          email: userData.email,
          password: userData.password,
        });

        callback(true);
      })
      .catch(err => {
        if (err.response && err.response.status === 401) {
          // Autentication error
          callback(false, err.response.data.error.user_authentication[0]);
        } else {
          // Display a generic error message
          callback(false, "");
        }
      });
    }
  }
}


export const SignInScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (SignInScreenComponent);
