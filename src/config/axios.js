import axios from 'axios';

import environment, { Types } from './environment';

const data = environment.data(Types.homologation);
const axiosInstance = axios.create(data);

export const setAuthorizationToken = (token) => {
  axiosInstance.defaults.headers.common['Authorization'] = token;
}

// TODO: delete is later
setAuthorizationToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyOCwiZXhwIjoxNDk0NjExNDYxfQ.Y4X7g2w74iPEMUHQqweNyQwMn8WZbAkbNPl8WegMm4E");

export default axiosInstance;