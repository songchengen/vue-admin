import Mock from 'mockjs'

Mock.mock('/api/user', 'get', (req, res) => {
  console.log(req, res)
  return {
    'user_name': 'sce'
  }
})
