// User
export const SET_USER = 'SET_USER';
export const SET_USER_ERRORS = 'SET_USER_ERRORS';

// Login
export const TOGGLE_REMEMBER_LOGIN = 'TOGGLE_REMEMBER_LOGIN';
export const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';
export const TOGGLE_SENDING_DATA_LOGIN = 'TOGGLE_SENDING_DATA_LOGIN';


// All Actions
export default {
  user: {
    SET_USER,
    SET_USER_ERRORS,
  },

  login: {
    TOGGLE_REMEMBER_LOGIN,
    SET_LOGIN_ERROR,
    TOGGLE_SENDING_DATA_LOGIN
  }
}
