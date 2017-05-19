import { connect } from 'react-redux';
import userLoginComponent from './user-login.component';

import { asyncUserLogin, asyncUserLogout, cleanUserErrors, asyncVisitorLogin } from '../../actions/user';

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
    },
    userLogout() {
      dispatch(asyncUserLogout());
    },
    cleanUserErrors(){
      dispatch(cleanUserErrors());
    },
    setVisitor(userData){
      dispatch(asyncVisitorLogin(userData));
    }
  }
}

const userLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(userLoginComponent)

export default userLoginContainer;
