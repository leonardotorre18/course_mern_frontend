import axios from "../utils/axios.config";

export const loginServices = (user: object): Promise<any> => {
  return axios.post('/auth/login', user);
}

export const registerServices = (user: object): Promise<any> => {
  return axios.post('/auth/register', user);
}