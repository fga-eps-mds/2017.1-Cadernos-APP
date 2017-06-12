import { INSPIRATIONS_SET, INSPIRATION_SET } from '../config/actions-types';

import initialState from '../config/initial-state';

export const inspirationReducer = (state=initialState.inspirations, action) => {
  switch(action.type) {
    case INSPIRATIONS_SET:
      return [...action.inspirations];

    default:
      return state;
  }
}

export default inspirationReducer;
