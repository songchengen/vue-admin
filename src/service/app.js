import API from './../utils/API'
import request from './../utils/request'

const { SESSION } = API.apis

export function login(data) {
  return request({
    url: SESSION,
    method: 'post',
    data
  })
}