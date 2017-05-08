import { USER_SET } from '../config/actions-types';

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
    axios.post(`/users`, {
      user: {...userData, email_confirmation: userData.email}
    })
    .then(feedBack => {
      setAuthorizationToken(feedBack.headers.auth_token);
      dispatch(userSet({...feedBack.data, password: userData.password}));
    })
    .catch(err => {
      if (err.response)
        console.log(err.response.data);
      else
        console.log(err);
    });
  }

}