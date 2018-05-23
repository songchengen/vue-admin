import axios from 'axios'

import api from './API'

const { root, prefix, apis } = api

// get complete url
const generateUrl = (key) => {
  return `${root}${prefix}${apis[key]}`
}
// return request
const mfetch = (option) => {
  let { method, url, data, headers } = option
  url = generateUrl(url)
  return axios({
    method,
    url,
    data,
    headers
  })
}

// axios func
export default (config) => {
  return mfetch(config).then(response => {
    return {
      success: true,
      ...response.data
    }
  }).catch(error => {
    console.log(error)
  })
}
