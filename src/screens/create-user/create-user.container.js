import { connect } from 'react-redux';
import createUserComponent from './create-user.component';

import { asyncCreateUser, cleanUserErrors, userRegister } from '../../actions/user-actions';

const mapStateToProps = (state) => {
  return {
    sendingData: state.user.sendingData,
    errors: state.user.errors,
    isRegistered: state.user.isRegistered
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cleanUserErrors(){
      dispatch(cleanUserErrors());
      dispatch(userRegister(false));
    },
    createUser(userData) {
      dispatch(asyncCreateUser(userData));
    }
  }
}

const createUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(createUserComponent)

export default createUserContainer;
