import { USER_SET, USER_ERRORS, USER_SENDING_DATA, USER_LOGIN, VISITOR_LOGIN, USER_AUTHENTICATED, USER_LOGOUT, CLEAN_USER_AUTHENTICATION_ERRORS, USER_REGISTER } from '../config/actions-types';

import axios, { setAuthorizationToken } from '../config/axios';

import initialState from '../config/initial-state';

export const userSet = ({
  id, name, email,
  password = initialState.user.password,
  sendingData = initialState.user.sendingData,
  isRegistered = initialState.user.isRegistered,
  authenticated = initialState.user.authenticated,
  isUpdated = initialState.user.isUpdated,
  errors = initialState.user.errors,
  isVisitor = initialState.user.isVisitor
}) => {
  return {
    type: USER_SET,
    user: {
      id,
      name,
      email,
      password,
      sendingData,
      isRegistered,
      authenticated,
      isUpdated,
      errors,
      isVisitor
    }
  }
};

export const userLogin = ({
  email, password,
  isVisitor = false
}) => {
  return {
    type: USER_LOGIN,
    user: {
      email,
      password,
      isVisitor
    }
  }
};

export const visitorLogin = (isVisitor) => {
  return {type: VISITOR_LOGIN, isVisitor}
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
    user: {
      email: '',
      password: '',
      isVisitor: false
    }
  }
};

export const userSendingData = (sendingData) =>{
  return {type: USER_SENDING_DATA, sendingData}
}

export const userAuthenticated = (authenticated) => {
  return {type: USER_AUTHENTICATED, authenticated}
}

export const userErrors = (errors) =>{
  return {
    type: USER_ERRORS,
    errors
  }
}

export const asyncCreateUser = (userData) => {
  return (dispatch) => {
    dispatch(userSendingData(true));

    axios.post(`/users`, {
      user: {...userData, email_confirmation: userData.email}
    })
    .then(feedBack => {
      setAuthorizationToken(feedBack.headers.auth_token);
      dispatch(userSet({...feedBack.data, password: userData.password}));
      dispatch(userSendingData(false));
      dispatch(userRegister(true));
    })
    .catch(err => {
      if (err.response && err.response.data){
        console.log(err.response.data);
        dispatch(userRegister(false));
        dispatch(userErrors(err.response.data));
      } else {
        console.log(err);
        dispatch(userRegister(false));
      }
      dispatch(userSendingData(false));
    });
  }

}

export const asyncEditUser = (userData) => {
  return (dispatch) => {
    dispatch(userSendingData(true));

    axios.patch(`/users/${userData.id}`, {
      user: {...userData, email_confirmation:userData.email}
    })
    .then(response => {
      dispatch(userSet({...response.data, password: userData.password}));
      dispatch(userUpdate(true));
    })
    .catch(err => {
      dispatch(userUpdate(false));
      if (err.response && err.response.data) {
        console.log(err.response.data);
        dispatch(userErrors(err.response.data));
      } else {
        console.error(err);
      }
    })
    .finally(() => {
      dispatch(userSendingData(false));
    });
  }
}

export const asyncUserLogin = (userData, callback) => {
  return (dispatch) => {
    dispatch(userSendingData(true));
    axios.post(`/authenticate`, {
      email: userData.email, password: userData.password
    })
    .then(feedBack => {
      let user = {
        ...userData,
        id: feedBack.data.user.id,
        name: feedBack.data.user.name,
        authenticated: true,
        sendingData: false
      };

      setAuthorizationToken(feedBack.data.auth_token);
      dispatch(userSet(user));

      callback(user);
    })
    .catch(err => {
      if (err.response && err.response.data){
        console.log(err.response.data);
        dispatch(userErrors(err.response.data));
      }else{
        console.log(err);
      }
      dispatch(userSendingData(false));
    });
  }

}

export const asyncUserLogout = () => {
  return (dispatch) => {
    dispatch(userAuthenticated(false));
    dispatch(userLogout());
    setAuthorizationToken("");
  }
}

export const cleanUserErrors = () => {
  return{
    type: CLEAN_USER_AUTHENTICATION_ERRORS,
    error: {}
  }
}

export const userRegister = (isRegistered) => {
  return{
    type: USER_REGISTER,
    isRegistered
  }
}

export const userUpdate = (isUpdated) => {
  return{
    type: USER_UPDATE,
    isUpdated
  }
}
