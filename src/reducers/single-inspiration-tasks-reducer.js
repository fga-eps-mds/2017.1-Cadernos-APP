import { INSPIRATION_TASKS_SET } from '../config/actions-types';

import initialState from '../config/initial-state';

export const tasksReducer = (state=initialState.inspirationTasks, action) => {
  switch(action.type) {
    case INSPIRATION_TASKS_SET:
      console.log('inspiration task do reducer:')
      console.log(action.inspirationTasks)
      return [...action.inspirationTasks];

    default:
      return state;
  }
}

export default tasksReducer;
