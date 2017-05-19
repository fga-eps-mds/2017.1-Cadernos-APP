import initialState from '../config/initial-state';
import { ACTIVITY_LIST_SET, ACTIVITY_LIST_SET_SENDING_DATA } from '../config/actions-types';

const activityListReducer = (state = initialState.activityList, action) => {
  switch (action.type) {
    case ACTIVITY_LIST_SET:
      return {
        ...action.activityList
      };

    case ACTIVITY_LIST_SET_SENDING_DATA:
      return {
        ...state,
        sendingData: action.sendingData,
      };

    default:
      return state;
  }
}

export default activityListReducer;
