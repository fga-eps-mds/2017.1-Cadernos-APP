import { connect } from 'react-redux';
import InviteList from './invite-list.component';

import { Actions } from 'react-native-router-flux';



const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const InviteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InviteList);

export default InviteListContainer;
