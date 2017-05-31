import { TASKS_SET, TASKS_DELETE } from '../config/actions-types';

import axios from '../config/axios';

export const setTasks = (tasks=[]) => {
  return {
    type: TASKS_SET,
    tasks
  }
}

export const taskDelete = (task) => {
  return {
    type: TASKS_DELETE,
    task
  }
}

export const asyncSetTasks = (book) => {
  return (dispatch) => {
    axios.get(`/books/${book.id}/tasks`)
      .then(response => {
        dispatch(setTasks(response.data));
      })
      .catch(err => {
        console.log(`Erro while getting tasks of book`);
        console.log(err);
      });

    //dispatch(setTasks(tasks));
  }
}


export const asyncTaskDelete = (task, callBack) => {
  return (dispatch) => {
    axios.delete(`/tasks/${task.id}`)
      .then(response => {
        dispatch(taskDelete(task));
        callBack(response);
      })
      .catch(err =>{
        console.log(`Erro while deleting task`);
        console.log(err);
      })
  }
}
