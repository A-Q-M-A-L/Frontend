export default {
  getToken(state){
     return state.token
  },
    isAuthanticated(state , getters){
    return state.isAuthenticated = !!getters.getToken 
  
    }

}