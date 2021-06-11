import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://registry.npmjs.org',
});

export default axiosInstance;
