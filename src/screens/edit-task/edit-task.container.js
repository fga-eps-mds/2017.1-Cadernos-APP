import { connect } from 'react-redux'
import EditTask from './edit-task.component'

import { Actions } from 'react-native-router-flux';
import { asyncEditSingleTask } from '../../actions/single-task-actions';

const mapStateToProps = (state) => {
  console.log(state.singleTask);

  return {
    task: state.singleTask
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTask(taskData) {
      dispatch(asyncEditSingleTask(taskData));
    }
  }
}

const EditTaskContainer = connect(mapStateToProps, mapDispatchToProps)(EditTask);
export default EditTaskContainer;
