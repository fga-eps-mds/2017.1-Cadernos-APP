import { TASKS_SET ,TASKS_DELETE } from '../config/actions-types';

import initialState from '../config/initial-state';

export const tasksReducer = (state=initialState.tasks, action) => {
  switch(action.type) {
    case TASKS_SET:
      return [...action.tasks];

    case TASKS_DELETE:
      return state.filter(task => task.id !== action.task.id);

    default:
      return state;
  }
}

export default tasksReducer;
