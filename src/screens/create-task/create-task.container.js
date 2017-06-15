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
    },

    uploadImage(taskData, imageSource, imageBase64) {
      imageBase64 = `data:image/png;base64,${imageBase64}`;

      const callback = (updatedTask) => {
        //dispatch(taskUpdate(updatedTask));

        Toast.show({
          text: 'Nova Imagem enviada',
          buttonText: 'OK',
          position: 'bottom',
          type: 'success'
        });
      }

      dispatch(asyncUpdateImageTask({
        id: singleTask.id,
        imageBase64
      }, callback));
    }
  }
}

const CreateTaskContainer = connect(mapStateToProps, mapDispatchToProps)(CreateTask);
export default CreateTaskContainer;