import { USER_SET, USER_SET_ERRORS, USER_SET_SENDING_DATA } from '../config/actions-types';

import axios, { setAuthorizationToken } from '../config/axios';

export const userSet = (user) => {
  return {
    type: USER_SET,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password
    }
  }
};

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

export const userSendingData = (sendingData) =>{
  return {type: USER_SET_SENDING_DATA, sendingData}
}

export const userErrors = (errors) =>{
  return {
    type: USER_SET_ERRORS,
    errors
  }
}