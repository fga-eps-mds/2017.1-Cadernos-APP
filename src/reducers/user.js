import { USER_SET, USER_SET_SENDING_DATA, USER_SET_ERRORS, CLEAN_USER_ERRORS, ACCOUNT_REGISTERED, USER_REGISTER} from '../config/actions-types';
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

    case USER_SET_ERRORS:
      return{
        ...state,
        errors: action.errors
      }

    case CLEAN_USER_ERRORS:
      return{
        ...state,
        errors: [{}]
      }
    case USER_REGISTER:
      return{
        ...state,
        isRegistered: action.isRegistered
      }

    default:
      return state;
  }
};

export default userReducer;