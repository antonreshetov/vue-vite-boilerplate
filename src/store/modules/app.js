export default {
  namespaced: true,

  state () {
    return {
      count: 0
    }
  },

  getters: {
    count (state) {
      return state.count
    }
  },

  mutations: {
    INCREMENT (state) {
      state.count++
    }
  },

  actions: {}
}
