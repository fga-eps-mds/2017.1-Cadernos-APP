import { USER_SET, USER_SENDING_DATA, USER_ERRORS, USER_LOGIN, USER_AUTHENTICATED, USER_LOGOUT} from '../config/actions-types';
import initialState from '../config/initial-state';

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case USER_SET:
      return {
        ...state, ...action.user
      }

    case USER_SENDING_DATA:
      return {
        ...state,
        sendingData: action.sendingData
      }

    case USER_ERRORS:
      return{
        ...state,
        errors: action.errors
      }

    case USER_LOGIN:
      return{
        ...state, ...action.user
      }

    case USER_LOGOUT:
     return{
       ...state, ...action.user
      }

    case USER_AUTHENTICATED:
      return{
        ...state,
        authenticated: action.authenticated
      }

    default:
      return state;
  }
};

export default userReducer;