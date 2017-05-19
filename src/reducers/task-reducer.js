import initialState from '../config/initial-state';
import { TASK_SET, TASK_SET_ERRORS, TASK_SET_SENDING_DATA, TASK_SET_CREATED } from '../config/actions-types';

const taskReducer = (state = initialState.task, action) => {
  switch (action.type) {
    case TASK_SET:
      return {
        ...action.task
      };

    case TASK_SET_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };

    case TASK_SET_SENDING_DATA:
      return {
        ...state,
        sendingData: action.sendingData
      };

    case TASK_SET_CREATED:
      return {
        ...state,
        created: action.created
      };

    default:
      return state;
  }
}

export default taskReducer;
