import { connect } from 'react-redux'
import CreateTask from './create-task.component'

import { Actions } from 'react-native-router-flux';
import { asyncSetSingleTask } from '../../actions/single-task-actions'

import {
  Toast
} from 'native-base';

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    sendingData: !!state.singleTask.sendingData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTask(taskData) {
      const callback = (createdTask) => {
        Actions.pop();

        //dispatch(addTask(createdTask));

        Toast.show({
          text: "Tarefa criada !",
          buttonText: 'Ok',
          position: 'bottom',
          type: 'success',
        });
      }

      dispatch(asyncSetSingleTask(taskData, callback));
    }
  }
}

const CreateTaskContainer = connect(mapStateToProps, mapDispatchToProps)(CreateTask);
export default CreateTaskContainer;