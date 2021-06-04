import axios from 'axios'
const baseUrl = '/api/upcoming-sermons/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getUpcomingSermons = async () => {
  const response = await axios.get(`${baseUrl}/${getLanguage()}`)
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
