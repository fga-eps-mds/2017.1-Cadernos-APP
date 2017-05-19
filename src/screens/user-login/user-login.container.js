import { connect } from 'react-redux';
import userLoginComponent from './user-login.component';

import { asyncUserLogin, asyncUserLogout, cleanUserErrors, visitorLogin } from '../../actions/user';

const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated,
    sendingData: state.user.sendingData,
    errors: state.user.errors,
    email: state.user.email,
    password: state.user.password,
    isVisitor: state.user.isVisitor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin(userData) {
      dispatch(asyncUserLogin(userData));
      dispatch(visitorLogin(false));
    },
    userLogout() {
      dispatch(asyncUserLogout());
      dispatch(visitorLogin(false));
    },
    cleanUserErrors(){
      dispatch(cleanUserErrors());
    },
    setVisitor(){
      dispatch(visitorLogin(true));
    }
  }
}

const userLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(userLoginComponent)

export default userLoginContainer;
