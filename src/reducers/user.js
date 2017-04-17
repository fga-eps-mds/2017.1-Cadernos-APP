import initialState from '../config/initial-state';
import Actions from '../config/actions';


const userReducer = (state=initialState.user, action) => {
  switch(action.type) {
    case Actions.User.SET_USER:
      return {
        id: action.id,
        name: action.name,
        email: action.email,
        auth_token: action.auth_token,
        errors: action.errors
      };


    case Actions.User.SET_USER_ERRORS:
      return Object.assign({}, state, {
        errors: action.errors
      });


    case Actions.User.TOGGLE_USER_REMEMBER_LOGIN:
      return Object.assign({}, state, {
        rememberLogin: !state.rememberLogin
      });


    default:
      return state;
  }
}

export default userReducer;
