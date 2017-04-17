import { connect } from 'react-redux';
import { SignUpScreenComponent } from './sign-up-screen.component';

import axios, { setAuthorizationToken } from '../../config/axios';
import { SET_USER, SET_USER_ERRORS } from '../../config/actions';


const mapStateToProps = (state) => {
  return {
    fieldsErrors: state.user.errors,
    sendingData: false,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createUser(userData, callback) {
      axios.post("/users", userData)
      .then(feedBack => {
        console.log('OK !');
        setAuthorizationToken(feedBack.headers.auth_token);

        console.log(feedBack.data);

        dispatch({
          type: SET_USER,
          id: feedBack.data.id,
          name: feedBack.data.name,
          email: feedBack.data.email,
          auth_token: feedBack.headers.auth_token,
          errors: {}
        })

        callback(true);
      })
      .catch(err => {
        console.log('ERR !');
        console.log(err);

        if (err.response && err.response.status === 422) {
          console.log('ERR !!!!');
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
