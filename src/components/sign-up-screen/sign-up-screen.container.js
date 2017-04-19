import { connect } from 'react-redux';
import { SignUpScreenComponent } from './sign-up-screen.component';

import axios, { setAuthorizationToken } from '../../config/axios';
import { SET_USER, SET_USER_ERRORS, SET_LOGIN_DATA } from '../../config/actions';


const mapStateToProps = (state) => {
  return {
    errors: state.user.errors,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    clearErrors() {
      dispatch({
        type: SET_USER_ERRORS,
        errors: {}
      });
    },


    createUser(userData, callback) {
      axios.post("/users", userData)
      .then(feedBack => {
        setAuthorizationToken(feedBack.headers.auth_token);

        dispatch({
          type: SET_USER,
          id: feedBack.data.id,
          name: feedBack.data.name,
          email: feedBack.data.email,
          auth_token: feedBack.headers.auth_token,
          errors: {}
        });

        dispatch({
          type: SET_LOGIN_DATA,
          isUserLogged: false,
          email: userData.user.email,
          password: userData.user.password
        });

        callback(true);
      })
      .catch(err => {
        if (err.response && err.response.status === 422) {
          dispatch({
            type: SET_USER_ERRORS,
            errors: err.response.data
          });

          callback(false);
        } else {
          // Display some generic error message
        }
      });
    },

  }
}


export const SignUpScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (SignUpScreenComponent);
