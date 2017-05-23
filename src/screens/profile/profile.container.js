import { connect } from 'react-redux';
import ProfileComponent from './profile.component';

const mapStateToProps = (state) => {
  return {
    isVisitor: state.user.isVisitor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const ProfileConatiner = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);

export default ProfileConatiner;