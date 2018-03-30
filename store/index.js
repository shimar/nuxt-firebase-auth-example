import firebase from '@/plugins/firebase'

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const strict = false

export const state = () => ({
  user: null
})

export const mutations = {
  setUser (state, payload) {
    state.user = payload
  }
}

export const actions = {
  login () {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithRedirect(googleProvider)
        .then(() => resolve())
        .catch((err) => reject(err))
    })
  },

  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut()
        .then(() => {
          commit('setUser', null)
          resolve()
        })
    })
  },

  setUser ({ commit }, payload) {
    commit('setUser', payload)
  }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  }
}
