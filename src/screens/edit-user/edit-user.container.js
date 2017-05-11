import { connect } from 'react-redux';
import editUserComponent from './edit-user.component.js';
import { asyncEditUser } from '../../actions/user';

const mapStateToProps = (state) =>{

  return {
      name: state.user.name,
      email: state.user.email,
      sendingData: state.user.sendingData,
      errors: state.user.errors
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    edituser(userData){
      dispatch(asyncEditUser(userData));
    }
  }
}
const editUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(editUserComponent)

export default editUserContainer;