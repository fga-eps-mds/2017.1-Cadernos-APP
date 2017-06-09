import { connect } from 'react-redux';
import InviteList from './invite-list.component';

import { Actions } from 'react-native-router-flux';

import { asyncInviteGet, asyncInviteDelete } from '../../actions/invite-actions'
import { asyncMembershipSet } from '../../actions/memberships-actions'
import { Toast } from 'native-base'

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
      const callback = (inviteAccepted) => {
        {

          if (inviteAccepted) {
            dispatch(asyncInviteDelete(key, user))
            Toast.show({
              text: 'Convite aceito!',
              position: 'center',
              buttonText: 'Ok'
            })
            Actions.pop();
          } else {
            Toast.show({
              text: 'Houve um problema! Convite não aceito.',
              position: 'center',
              buttonText: 'Ok'
            })
          }
        }

      }
      dispatch(asyncMembershipSet(key, user, callback))

    }

  }
}

const InviteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InviteList);

export default InviteListContainer;
