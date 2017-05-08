import { USER_SET } from '../config/actions-types';
import initialState from '../config/initial-state';

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case USER_SET:
      return {
        ...state.user, ...action.user
      }

    default:
      return state;
  }
};

export default userReducer;