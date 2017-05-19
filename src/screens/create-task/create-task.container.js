import { connect } from 'react-redux';
import CreateTaskComponent from './create-task.component';

import { asyncTaskSet, taskSetErrors, taskSetCreated } from '../../actions/task-actions';

const mapStateToProps = (state) => {
  return {
    id: state.task.id,
    title: state.task.title,
    content: state.task.content,
    loggedUserId: state.user.id,
    sendingData: state.task.sendingData,
    errors: state.task.errors,
    created: state.task.created
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTask(taskData) {
      dispatch(asyncTaskSet(taskData));
    },

    clearErrors() {
      dispatch(taskSetErrors({}));
      dispatch(taskSetCreated(false));
    }
  }
}

const CreateTaskContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (CreateTaskComponent);

export default CreateTaskContainer;
