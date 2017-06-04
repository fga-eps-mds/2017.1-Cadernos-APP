import { connect } from 'react-redux';
import InviteList from './invite-list.component';

import { Actions } from 'react-native-router-flux';

import { asyncInviteGet, asyncInviteDelete } from '../../actions/invite-actions'


const mapStateToProps = (state) => {
  return {
    invites: state.invites,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInvites(user) {
      dispatch(asyncInviteGet(user))
    },

    delete(key, user){
      dispatch(asyncInviteDelete(key, user))
    }

  }
}

const InviteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InviteList);

export default InviteListContainer;
