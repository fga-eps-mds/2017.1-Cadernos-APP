import { connect } from 'react-redux';
import { SignInScreenComponent } from './sign-in-screen.component';
import Actions from '../../config/actions';


const mapStateToProps = (state) => {
  return {
    rememberLogin: state.user.rememberLogin
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    toggleRememberLogin() {
      dispatch({
        type: Actions.User.TOGGLE_USER_REMEMBER_LOGIN
      });
    }
  }
}


export const SignInScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (SignInScreenComponent);
