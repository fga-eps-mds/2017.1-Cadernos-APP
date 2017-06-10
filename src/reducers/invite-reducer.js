import { INVITES_SET } from '../config/actions-types';

import initialState from '../config/initial-state';

export const invitesReducer = (state=initialState.invites, action) => {
  switch(action.type) {
    case INVITES_SET:
      return [...action.invites];

    default:
      return state;
  }
}

export default invitesReducer;
