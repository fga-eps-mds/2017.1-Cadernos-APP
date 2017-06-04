import { SINGLE_TASK_SET, SINGLE_TASK_SENDING_DATA, SINGLE_TASK_CLEAR } from '../config/actions-types';

import initialState from '../config/initial-state';

export const singleTaskReducer = (state = initialState.singleTask, action) => {
  switch (action.type) {
    case SINGLE_TASK_SET:
      return { ...action.singleTask };

    case SINGLE_TASK_SENDING_DATA:
      return {
        ...state,
        sendingData: action.sendingData
      };

    case SINGLE_TASK_CLEAR:
      return {};

    default:
      return state;
  }
}

export default singleTaskReducer;
