import axios from 'axios';
const BASE_URL = 'https://api.peykarjou.com/api/v1';
export const UPLOAD_URL = 'https://peykarjou.com/';

const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default request;
