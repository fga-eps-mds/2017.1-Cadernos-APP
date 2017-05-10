import { connect } from 'react-redux';
import editUserComponent from './edit-user.component.js';


const mapStateToProps = (state) =>{
  return {
      sendingData: state.user.sendingData,
      errors: state.user.errors
  }
}

const editUserContainer = connect(
  mapStateToProps
)(editUserComponent)

export default editUserContainer;