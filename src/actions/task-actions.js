import {
  TASK_SET,
  TASK_SET_ERRORS,
  TASK_SET_SENDING_DATA,
  TASK_SET_CREATED
} from '../config/actions-types';

import axios from '../config/axios';

import initialState from '../config/initial-state';

import {
  navigate
} from 'react-navigation';

export const taskSet = ({
  id, title, content,
  sendingData = initialState.task.sendingData,
  errors = initialState.task.errors,
  created = initialState.task.created
}) => {
  return {
    type: TASK_SET,
    task: {
      id,
      title,
      content,
      userId,
      sendingData,
      errors,
      created
    }
  }
}

export const taskSetErrors = (errors) => {
  return {
    type: TASK_SET_ERRORS,
    errors
  }
}

export const taskSetSendingData = (sendingData) => {
  return {
    type: TASK_SET_SENDING_DATA,
    sendingData
  }
}

export const taskSetCreated = (created) => {
  return {
    type: TASK_SET_CREATED,
    created
  }
}

export const asyncTaskSet = (taskData) => {
  return (dispatch) => {
    dispatch(taskSetSendingData(true));

    axios.post('/tasks', {
      title: taskData.title,
      content: taskData.content,
      user_id: taskData.loggedUserId
    })
    .then(response => {
      if (response.data && response.data.id) {
        dispatch(taskSet({
          id: response.data.id,
          title: response.data.title,
          content: response.data.content,
          userId: response.data.user_id,
          created: true,
          errors: {},
          sendingData: false
        }));
      }
    })
    .catch(err => {
      if (err.response && err.response.status === 422) {
        dispatch(taskSetErrors(err.response.data));
      }

      console.log('ERROR while creating task');
      console.log(err);

      // to when the user try to create another task,
      // the screen won't open with a loading on the send button
      dispatch(taskSetSendingData(false));
    });
  }
}