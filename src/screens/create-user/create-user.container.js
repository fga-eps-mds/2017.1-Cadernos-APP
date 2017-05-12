import { connect } from 'react-redux';
import createUserComponent from './create-user.component';

import { asyncCreateUser, cleanUserErrors } from '../../actions/user';

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
