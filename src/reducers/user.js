import initialState from '../config/initial-state';
import { SET_USER } from '../config/actions';

const userReducer = (state=initialState.user, action) => {
  switch(action.type) {
    case SET_USER:
      return {
        name: action.name,
        email: action.email,
        auth_token: action.auth_token
      };

    default:
      return state;
  }
}

export default userReducer;
