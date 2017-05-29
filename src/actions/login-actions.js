import { LOGIN_SET_REMEMBER } from '../config/actions-types';

import initialState from '../config/initial-state';

export const setLoginRemember = (remember=initialState.login.remember) => {
  return {
    type: LOGIN_SET_REMEMBER,
    remember
  }
}