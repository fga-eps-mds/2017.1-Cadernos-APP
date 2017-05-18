import { USER_REGISTER, USER_SET, USER_SENDING_DATA, USER_ERRORS, USER_LOGIN, USER_AUTHENTICATED, USER_LOGOUT, CLEAN_USER_AUTHENTICATION_ERRORS} from '../config/actions-types';

import initialState from '../config/initial-state';

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case USER_SET:
      return {
        ...action.user
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

    case USER_REGISTER:
      return{
        ...state,
        isRegistered: action.isRegistered
      };

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
    case CLEAN_USER_AUTHENTICATION_ERRORS:
      return{
        ...state,
        errors:{...action.errors}
      }

    default:
      return state;
  }
};

export default userReducer;
