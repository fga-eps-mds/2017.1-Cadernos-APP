import { CATEGORIES_SET } from '../config/actions-types';

import initialState from '../config/initial-state';

export const categoriesReducer = (state=initialState.categories, action) => {
  switch(action.type) {
    case CATEGORIES_SET:
      return [...action.categories];

    default:
      return state;
  }
}

export default categoriesReducer;
