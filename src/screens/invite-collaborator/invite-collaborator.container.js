import { connect } from 'react-redux';
import InviteCollaborator from './invite-collaborator.component';

import { Actions } from 'react-native-router-flux';



const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const InviteCollaboratorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InviteCollaborator);

export default InviteCollaboratorContainer;
