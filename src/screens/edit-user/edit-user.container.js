import { connect } from 'react-redux';
import editUserComponent from './edit-user.component.js';
import { asyncEditUser, asyncUpdateUserAvatar } from '../../actions/user-actions';

import { Toast } from 'native-base';

const mapStateToProps = (state) => {
  return {
    id: state.user.id,
    name: state.user.name,
    email: state.user.email,
    sendingData: state.user.sendingData,
    errors: state.user.errors,
    isRegistered: state.user.isRegistered,
    avatar: state.user.avatar_medium
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editUser(userData) {
      const callback = (message) => {
        Toast.show({
          text: message,
          buttonText: 'OK',
          position: 'center'
        });
      }

      dispatch(asyncEditUser(userData, callback));
    },

    uploadUserAvatar(id, email, imageSource, imageBase64) {
      imageBase64 = `data:image/png;base64,${imageBase64}`;

      const callback = (message) => {
        Toast.show({
          text: message,
          buttonText: 'OK',
          position: 'center'
        });
      }

      dispatch(asyncUpdateUserAvatar({id, email, imageBase64}, callback));
    }
  }
}
const editUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(editUserComponent)

export default editUserContainer;
