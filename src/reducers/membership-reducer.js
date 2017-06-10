import { MEMBERSHIPS_SET } from '../config/actions-types';

import initialState from '../config/initial-state';

export const membershipsReducer = (state=initialState.memberships, action) => {
  switch(action.type) {
    case MEMBERSHIPS_SET:
      return [...action.memberships];

    default:
      return state;
  }
}

export default membershipsReducer;
