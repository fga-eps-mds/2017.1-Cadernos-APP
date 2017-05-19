import initialState from '../config/initial-state';
import { ACTIVITY_SET, ACTIVITY_SET_ERRORS, ACTIVITY_SET_SENDING_DATA, ACTIVITY_SET_CREATED } from '../config/actions-types';

const activityReducer = (state = initialState.activity, action) => {
  switch (action.type) {
    case ACTIVITY_SET:
      return {
        ...action.activity
      };

    case ACTIVITY_SET_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };

    case ACTIVITY_SET_SENDING_DATA:
      return {
        ...state,
        sendingData: action.sendingData
      };

    case ACTIVITY_SET_CREATED:
      return {
        ...state,
        created: action.created
      };

    default:
      return state;
  }
}

export default activityReducer;
