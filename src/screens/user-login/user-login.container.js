import { connect } from 'react-redux';
import userLoginComponent from './user-login.component';

import { asyncUserLogin } from '../../actions/user';

const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated,
    sendingData: state.user.sendingData,
    errors: state.user.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin(userData) {
      dispatch(asyncUserLogin(userData));
    }
  }
}

const userLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(userLoginComponent)

export default userLoginContainer;
