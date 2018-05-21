import axios from 'axios'

import api from './API'

const { root, prefix, apis } = api
// get complete url
const generateUrl = (key) => {
  return `${root}${prefix}${apis[key]}`
}

// axios request interceptors
axios.interceptors.request.use((params) => {
  let config = {}
  config.url = generateUrl(params.url)
  config.method = params.method || 'get'
  config.data = params.data || null
  config.headers = params.headers || {}
  return config
})

// axios func
export default (config) => {
  return axios(config).then(response => response.data)
}
