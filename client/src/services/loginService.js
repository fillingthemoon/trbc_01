import axios from 'axios'
const baseUrl = '/api/login'

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const stayLoggedIn = async (credentials) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(`${baseUrl}/stay`, credentials, config)
  return response.data
}

const loginService = {
  login,
  stayLoggedIn,
}

export default loginService