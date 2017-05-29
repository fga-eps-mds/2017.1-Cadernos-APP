import { connect } from 'react-redux';
import Main from './main.component';

import { userLogin } from '../../actions/user-actions';

const mapStateToProps = (state) => {
  return {
    rememberLogin: state.login.remember
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setupUserLogin({email, password}) {
      dispatch(userLogin({email, password}));
    }
  }
}

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (Main);

export default MainContainer;