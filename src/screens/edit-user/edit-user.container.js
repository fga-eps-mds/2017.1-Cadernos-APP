import { connect } from 'react-redux';
import editUserComponent from './edit-user.component.js';


const mapStateToProps = (state) =>{

  return {
      name: state.user.name,
      email: state.user.email,
      sendingData: state.user.sendingData,
      errors: state.user.errors
  }
}

const editUserContainer = connect(
  mapStateToProps
)(editUserComponent)

export default editUserContainer;