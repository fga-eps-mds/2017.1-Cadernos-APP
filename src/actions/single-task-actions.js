import { SINGLE_TASK_SET, SINGLE_TASK_SENDING_DATA, SINGLE_TASK_CLEAR } from '../config/actions-types';

import initialState from '../config/initial-state';
import axios from '../config/axios';

export const setSingleTask = (singleTask={...initialState.singleTask}) => {
  return {
    type: SINGLE_TASK_SET,
    singleTask
  }
}

export const setSingleTaskSendingData = (sendingData) => {
  return {
    type: SINGLE_TASK_SENDING_DATA,
    sendingData
  }
}

export const clearSingleTask = () => {
  return (dispatch) => {
    dispatch(setSingleTask(initialState.singleTask));
  }
}

export const asyncSetSingleTask = (taskData, callback) => {
  return (dispatch) => {
    dispatch(setSingleTaskSendingData(true));
    console.log("Action: ")
    console.log(taskData)
    axios.post('/tasks', {
      task: taskData
    })
      .then(response => {
        callback(response.data);
      })
      .catch(err => {
        if (err.response &&
          err.response.data &&
          err.response.status === 422
        ) {
          dispatch(setSingleTask({
            errors: err.response.data
          }));
        } else {
          console.log("Error while creating task:");
          console.warn(err);
        }
      })
      .finally(() => {
        dispatch(setSingleTaskSendingData(false));
      });
  }
}

export const asyncEditSingleTask = (taskData, callback) => {

  return (dispatch) => {
    axios.patch(`/tasks/${taskData.id}`, {
      task: taskData
    })
    .then(response => {
      dispatch(setSingleTask(response.data));
      console.log("Resultado do edit de task");
      console.log(response.data);

      callback(response.data);
    })
    .catch(err => {
      console.warn("Erro ao editar task");
      console.log(err);
    });
  }
}

