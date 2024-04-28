
const TokenService = {
  getToken() {
    return localStorage.getItem("token")
  },

  saveToken(accessToken) {
    localStorage.setItem("token", accessToken)
  },

  removeToken() {
    localStorage.removeItem("token")
  }
}



export {
  TokenService
}
