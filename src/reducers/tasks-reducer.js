import { TASKS_SET ,TASKS_DELETE, TASKS_ADD, TASKS_UPDATE } from '../config/actions-types';

import initialState from '../config/initial-state';

export const tasksReducer = (state=initialState.tasks, action) => {
  switch(action.type) {
    case TASKS_SET:
      return [...action.tasks];

    case TASKS_DELETE:
      return state.filter(task => task.id !== action.task.id);

    case TASKS_ADD:
      return [...state, action.task];

    case TASKS_UPDATE:
      return state.map(task => {
        if(task.id === action.task.id) {
          task = action.task;
        }

        return task;
      });

    default:
      return state;
  }
}

export default tasksReducer;
