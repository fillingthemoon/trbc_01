import axios from 'axios'
const baseUrl = '/api/upcoming-sermons/'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getUpcomingSermons = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createUpcomingSermon = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const upcomingSermonsService = {
  setToken,
  getUpcomingSermons,
  createUpcomingSermon,
}

export default upcomingSermonsService
