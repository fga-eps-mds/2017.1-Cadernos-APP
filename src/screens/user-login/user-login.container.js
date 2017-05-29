import { connect } from 'react-redux';
import userLoginComponent from './user-login.component';

import { Actions, ActionConst } from 'react-native-router-flux';
import { asyncUserLogin, asyncUserLogout, cleanUserErrors, visitorLogin } from '../../actions/user-actions';
import { setLoginRemember } from '../../actions/login-actions';
import { setStoredUserLogin } from '../../device-storage/login';

const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated,
    sendingData: state.user.sendingData,
    errors: state.user.errors,
    email: state.user.email,
    password: state.user.password,
    isVisitor: state.user.isVisitor,
    rememberLogin: state.login.remember
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin(data) {
      const callback = (loggedUser) => {
        Actions.Home({type: ActionConst.REPLACE});

        dispatch(setLoginRemember(data.login.remember));
        setStoredUserLogin({
          rememberLogin: data.login.remember,
          email: data.user.email,
          password: data.user.password
        });
      }

      dispatch(asyncUserLogin(data.user, callback));
    },

    userLogout() {
      dispatch(asyncUserLogout());
      dispatch(visitorLogin(false));
    },

    cleanUserErrors(){
      dispatch(cleanUserErrors());
    },

    enterAsVisitor(){
      dispatch(visitorLogin(true));
      Actions.Home({type: ActionConst.REPLACE});
    }
  }
}

const userLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(userLoginComponent)

export default userLoginContainer;
