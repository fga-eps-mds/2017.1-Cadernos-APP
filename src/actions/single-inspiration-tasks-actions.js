import initialState from '../config/initial-state';
import axios from '../config/axios';
import { INSPIRATION_TASKS_SET } from '../config/actions-types';
export const setInspirationTasks = (inspirationTasks=[]) => {
  return {
    type: INSPIRATION_TASKS_SET,
    inspirationTasks
  }
}


export const asyncSetInspirationsTasks = (book) => {
  return (dispatch) => {
    axios.get(`/books/${book.id}/tasks`)
      .then(response => {
        dispatch(setInspirationTasks(response.data));
      })
      .catch(err => {
        console.log(`Erro while getting tasks of inspiration book`);
        console.log(err);
      });

    //dispatch(setTasks(tasks));
  }
}