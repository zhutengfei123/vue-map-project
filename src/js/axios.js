import axios from 'axios'
import qs from 'qs'
const Axios = axios.create({
  baseURL: '/',
  timeout: 10000,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})
Axios.interceptors.request.use(config => {
  if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
    config.data = qs.stringify(config.data)
  }
  if (localStorage.token) {
    config.headers.token = localStorage.token
  }
  return config
}, error => {
  this.$message.error(error)
  return Promise.reject(error.data.error.message)
})
Axios.interceptors.response.use(res => {
  return res.data
}, error => {
  if (!window.localStorage.getItem('loginUserBaseInfo')) {
    this.$router.push('/login')
  } else {
    let lifeTime = JSON.parse(window.localStorage.getItem('loginUserBaseInfo')).lifeTime * 1000
    let nowTime = new Date().getTime()
    if (nowTime > lifeTime) {
      this.$message.error(error)
      this.$router.push('/login')
    } else {
      let status = error.response.status
      switch (status) {
        case 403:
          this.$router.push('/error/403')
          break
        case 500:
          this.$router.push('/error/500')
          break
        case 502:
          this.$router.push('/error/502')
          break
        case 404:
          this.$router.push('/error/404')
          break
        default:
          this.$rouer.push('/error/404')
      }
    }
  }
  let errorInfo = error.data.error ? error.data.error.message : error.data
  return Promise.reject(errorInfo)
})
export default Axios
