import { TASK_LIST_SET, TASK_LIST_SET_SENDING_DATA } from '../config/actions-types';
import axios from '../config/axios';

import initialState from '../config/initial-state';

export const taskListSet = (tasksArray) => {
  const tasks = tasksArray.map(task => {
    return {
      id: book.id,
      title: task.title,
      content: task.content,
      userId: task.user_id,
    } ;
  });

  return {
    type: TASK_LIST_SET,
    taskList: {
      sendingData: initialState.taskList.sendingData,
      tasks
    }
  }
}

export const taskListSetSendingData = (sendingData) => {
  return {
    type: TASK_LIST_SET_SENDING_DATA,
    sendingData
  }
}

export const asyncTaskListSet = () => {
  return (dispatch) => {
    dispatch(taskListSetSendingData(true));

    axios.get('/tasks')
    .then(response => {
      if (response.data) {
        dispatch(taskListSet(response.data));
      }
    })
    .catch(err => {
      // Meybe an user internet error
      console.log('Error while getting tasks, see asyncTaskListSet');
      console.log(err);
    })
    .finally(() => {
      dispatch(taskListSetSendingData(false));
    });
  }
}