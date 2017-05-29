import { LOGIN_SET_REMEMBER } from '../config/actions-types';

import initialState from '../config/initial-state';

export const loginReducer = (state=initialState.login, action) => {
  switch(action.type) {
    case LOGIN_SET_REMEMBER:
      return {
        remember: !!action.remember
      };

    default:
      return state;
  }
}

export default loginReducer;