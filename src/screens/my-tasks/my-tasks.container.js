import { connect } from 'react-redux';
import MyTasksComponent from './my-tasks.component';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const MyTasksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (ViewBookComponent);

export default MyTasksContainer;
