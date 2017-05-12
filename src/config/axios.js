import axios from 'axios';

import environment, { Types } from './environment';

const data = environment.data(Types.homologation);
const axiosInstance = axios.create(data);

export const setAuthorizationToken = (token) => {
  axiosInstance.defaults.headers.common['Authorization'] = token;
}
setAuthorizationToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE0OTQ3MDAyMDJ9.o5BCGdpDg-j4Q_kUUl8We90mysP6fHbXUCtTgUvXYoI');

export default axiosInstance;