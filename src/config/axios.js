import axios from 'axios';

import environment, { Types } from './environment';

const data = environment.data(Types.development);
const axiosInstance = axios.create(data);

export const setAuthorizationToken = (token) => {
  axiosInstance.defaults.headers.common['Authorization'] = token;
}

export const getBaseUrl = () => data.baseURL;

export default axiosInstance;
