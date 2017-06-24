import { connect } from 'react-redux';
import SideBarComponent from './side-bar.component';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const SideBarConatiner = connect(
  mapStateToProps,
  mapDispatchToProps
) (SideBarComponent);

export default SideBarConatiner;