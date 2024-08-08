export default {
  setToken(context, payload){
    context.commit('setToken', payload)
  },
  logout(context){
    context.commit('user/setUser', null, { root: true })
  }
}