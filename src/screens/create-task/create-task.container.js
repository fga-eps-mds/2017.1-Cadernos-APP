import { connect } from 'react-redux';
import CreateTaskComponent from './create-task.component';

import { asyncTaskSet, taskSetErrors, taskSetCreated, taskSet } from '../../actions/task-actions';

import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => {
  return {
    task: state.task,
    book: state.book,
    loggedUserId: state.user.id,
    category_id: state.category_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTask(taskData) {
      const callback = (createdTask) => {
        console.log('Task created !!');
        console.log(createdTask);

        // After creating the task go to view task
        // Actions.ViewTask();
      }

      dispatch(asyncTaskSet(taskData, callback));
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
