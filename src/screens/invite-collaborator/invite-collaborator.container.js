import { connect } from 'react-redux';
import InviteCollaborator from './invite-collaborator.component';
import { asyncInviteSet } from '../../actions/invite-actions'
import { Actions } from 'react-native-router-flux';
import { Toast } from 'native-base'


const mapStateToProps = (state) => {
  return {
    book: state.book,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    createInvite(inviteData) {
      const callback = (inviteSent) => {
        {
          if (inviteSent) {
            Toast.show({
              text: 'Convite enviado!',
              position: 'center',
              buttonText: 'Ok'
            })
            Actions.pop();
          } else {
            Toast.show({
              text: 'Usuário não encontrado, verifique se você digitou corretamente!',
              position: 'center',
              buttonText: 'Ok'
            })
          }
        }

      }

      dispatch(asyncInviteSet(inviteData, callback));
    }

  }
}

const InviteCollaboratorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InviteCollaborator);

export default InviteCollaboratorContainer;

