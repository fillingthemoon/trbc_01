import axios from 'axios'
const baseUrl = '/api/upcoming-sermons/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getUpcomingSermons = async () => {
  const response = await axios.get(`${baseUrl}/${getLanguage()}`)
  return response.data
}

const createUpcomingSermon = async (newObject) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`

  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)

  return response.data
}

const upcomingSermonsService = {
  getUpcomingSermons,
  createUpcomingSermon,
}

export default upcomingSermonsService
