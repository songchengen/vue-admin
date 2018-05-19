import axios from 'axios'

import api from './API'

// get complete url
const generateUrl = (key) => {
  return `${api.root}${api.prefix}${api[key]}`
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
