import { SINGLE_TASK_SET, SINGLE_TASK_SENDING_DATA } from '../config/actions-types';

import axios from '../config/axios';

export const setSingleTask = ({ }) => {
  return {
    type: SINGLE_TASK_SET,
    singleTask: {}
  }
}

export const setSingleTaskSendingData = (sendingData) => {
  return {
    type: SINGLE_TASK_SENDING_DATA,
    sendingData
  }
}

export const asyncSetSingleTask = (taskData, callback) => {
  return (dispatch) => {
    dispatch(setSingleTaskSendingData(true));

    axios.post('/tasks', {
      task: taskData
    })
    .then(response => {
      dispatch(setSingleTaskSendingData(false));
      callback(response.data);
    })
    .catch(err => {
      console.log("Error while creating task:");
      console.warn(err);
    });
  }
}