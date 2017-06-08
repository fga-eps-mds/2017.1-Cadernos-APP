import { connect } from 'react-redux';
import InviteList from './invite-list.component';

import { Actions } from 'react-native-router-flux';

import { asyncInviteGet, asyncInviteDelete } from '../../actions/invite-actions'
import { asyncMembershipSet } from '../../actions/memberships-actions'

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
    },

    accept(key, user){
      dispatch(asyncMembershipSet(key, user))
      dispatch(asyncInviteDelete(key, user))
    }

  }
}

const InviteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InviteList);

export default InviteListContainer;
