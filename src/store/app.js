import { login } from './../service/app'

export default {
  state: {
    user_name: '',
    role: [],
    avatar: '',
    menu: []
  },
  mutations: {
    USER_UPDATE (state, payload) {
      state.user_name = payload.user_name
      state.avatar = payload.avatar
    }
  },
  actions: {
    login ({ commit }, payload) {
      return login(payload).then(response => {
        if (response.success) {
          const { data } = response
          commit('USER_UPDATE', data)
        }
      })
    }
  }
}
