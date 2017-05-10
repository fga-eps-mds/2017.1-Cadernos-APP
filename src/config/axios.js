import axios from 'axios';

import environment, { Types } from './environment';

const data = environment.data(Types.homologation);
const axiosInstance = axios.create(data);

export const setAuthorizationToken = (token) => {
  axiosInstance.defaults.headers.common['Authorization'] = token;
}

// TODO: delete is later
setAuthorizationToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyOCwiZXhwIjoxNDk0NTIzOTE2fQ.7EyDzqwDO4oS-TzwwqM0nd0UT0CjOr85Hwbg2EUzWnw");

export default axiosInstance;