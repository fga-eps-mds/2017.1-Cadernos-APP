import { connect } from 'react-redux';
import ListTasksComponent from './list-tasks.component';

import { asyncTaskListSet } from '../../actions/task-list-actions';

const mapStateToProps = (state) => {
  console.log(state.user);

  return {
    tasks: state.taskList.tasks,
    sendingData: state.taskList.sendingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks() {
      dispatch(asyncTaskListSet());
    }
  }
}

const ListTasksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTasksComponent);

export default ListTasksContainer;
