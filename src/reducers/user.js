import { USER_SET, USER_SET_SENDING_DATA} from '../config/actions-types';
import initialState from '../config/initial-state';

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case USER_SET:
      return {
        ...state, ...action.user
      }

    case USER_SET_SENDING_DATA:
      return {
        ...state,
        sendingData: action.sendingData
      }


    default:
      return state;
  }
};

export default userReducer;