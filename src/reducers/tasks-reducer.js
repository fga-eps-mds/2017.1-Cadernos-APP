import { TASKS_SET } from '../config/actions-types';

import initialState from '../config/initial-state';

export const tasksReducer = (state=initialState.tasks, action) => {
  switch(action.type) {
    case TASKS_SET:
      return [...action.tasks];

    default:
      return state;
  }
}

export default tasksReducer;