import { connect } from 'react-redux';
import createUserComponent from './create-user.component';

import { asyncCreateUser } from '../../actions/user';

const mapStateToProps = (state) => {
  return {
    sendingData: false
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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
