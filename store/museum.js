export const state = () => ({
  entered: false
})

export const getter = {
  getEntered (state) {
    return state.entered
  }
}

export const mutations = {
  enter (state) {
    state.entered = !state.entered
  }
}
