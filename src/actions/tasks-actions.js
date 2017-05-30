import { TASKS_SET } from '../config/actions-types';

import axios from '../config/axios';

export const setTasks = (tasks=[]) => {
  return {
    type: TASKS_SET,
    tasks
  }
}

export const asyncSetTasks = (book) => {
  return (dispatch) => {
    axios.get(`/books/${book.id}/tasks`)
      .then(response => {
        console.log("TASKS !");
        console.log(response.data);
        dispatch(setTasks(response.data));
      })
      .catch(err => {
        console.log(`Erro while getting tasks of book`);
        console.log(err);
      });

    //dispatch(setTasks(tasks));
  }
}