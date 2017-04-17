import initialState from '../config/initial-state';
import { SET_USER, SET_USER_ERRORS } from '../config/actions';

const userReducer = (state=initialState.user, action) => {
  switch(action.type) {
    case SET_USER:
      return {
        id: action.id,
        name: action.name,
        email: action.email,
        auth_token: action.auth_token,
        errors: action.errors
      };

    case SET_USER_ERRORS:
      return Object.assign({}, state, {
        errors: action.errors
      });

    default:
      return state;
  }
}

export default userReducer;
