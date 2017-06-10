import { INSPIRATION_SET } from '../config/actions-types';

import initialState from '../config/initial-state';

export const SingleInspirationReducer = (state=initialState.inspiration, action) => {
  switch(action.type) {
    case INSPIRATION_SET:
      console.log("Inspiration do reducer");
      console.log(action.inspiration);
      return { ...action.inspiration };

    default:
      return state;
  }
}

export default SingleInspirationReducer;
