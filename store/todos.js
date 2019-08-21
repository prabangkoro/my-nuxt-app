export const state = () => ({
  list: []
})

export const getters = {
  todos (state) {
    return state.list
  }
}

export const mutations = {
  add (state, text) {
    state.list.push({
      text,
      done: true
    })
  }
}

export const actions = {
  add ({ commit }, text) {
    commit('add', text)
  }
}
