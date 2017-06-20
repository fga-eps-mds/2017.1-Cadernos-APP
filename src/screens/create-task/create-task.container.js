import { connect } from 'react-redux'
import CreateTask from './create-task.component'

import { Actions } from 'react-native-router-flux';
import { taskUpdate } from '../../actions/tasks-actions';

import {
    asyncSetSingleTask,
    clearSingleTask,
    asyncUpdateImageTask
} from '../../actions/single-task-actions';

import { Toast } from 'native-base';

import { taskAdd } from '../../actions/tasks-actions';

const mapStateToProps = (state) => {
  const errors = state.singleTask.errors || {};

  return {
    categories: state.categories,
    sendingData: !!state.singleTask.sendingData,
    errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTask(taskData) {
      const callback = (createdTask) => {
        dispatch(taskAdd(createdTask));
        Actions.pop();
      }

      dispatch(asyncSetSingleTask(taskData, callback));
    },

    clearTaskData() {
      dispatch(clearSingleTask());
    }

    }
  }


const CreateTaskContainer = connect(mapStateToProps, mapDispatchToProps)(CreateTask);
export default CreateTaskContainer;