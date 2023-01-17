import axios from 'axios'
export default axios.create({
  baseURL: 'http://localhost:3024/api',
  responseType: 'json',
  timeout: 6000
})