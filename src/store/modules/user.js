export default {
  namespaced: true,
  state: {
    users: [],
    userFilters: {},
    filtredUsers: []
  },
  getters: {
    users: state => state.users,
    userFilters: state => state.userFilters
  },
  mutations: {
    SET_FILTERS(state, payload = {}) {
      state.userFilters = payload
    },
    SET_USERS(state, payload = []) {
      state.users = payload
    }
  },
  actions: {
    async GET_USERS({ commit }) {
      const result = await this.$services.user.getUsers()
      commit('SET_USERS', result)
      return result
    }
  }
}

