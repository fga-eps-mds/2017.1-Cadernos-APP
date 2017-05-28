import update from 'immutability-helper';
import initialState from '../config/initial-state';

import {
  DRAWER_DISPLAY_GO_BACK,
  DRAWER_DISPLAY_SELF,
  DRAWER_TITLE,
  DRAWER_SET
} from '../config/actions-types';

const drawerDataReducer = (state=initialState.drawerData, action) => {
  switch(action.type) {
    case DRAWER_DISPLAY_SELF:
      return update(state, {
        displaySelf: {
          $set: !!action.displaySelf
        }
      });

    case DRAWER_DISPLAY_GO_BACK:
      return update(state, {
        displayGoBack: {
          $set: !!action.displayGoBack
        }
      });

    case DRAWER_TITLE:
      return update(state, {
        title: {
          $set: action.title
        }
      });

    case DRAWER_SET:
      return update(state, {
        title: {
          $set: action.title
        },
        displayGoBack: {
          $set: !!action.displayGoBack
        },
        displaySelf: {
          $set: !!action.displaySelf
        }

      });

    default:
      return state;
  }
}

export default drawerDataReducer;