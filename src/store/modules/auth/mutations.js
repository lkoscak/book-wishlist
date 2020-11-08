export default {
    setUser(state, user){
        state.userId = user.userId,
        state.token = user.token
    },
    setAutoLogout(state) {
        state.didAutoLogout = true;
      }
}