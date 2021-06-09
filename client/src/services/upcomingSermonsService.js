import axios from 'axios'
const baseUrl = '/api/upcoming-sermons/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getUpcomingSermons = async () => {
  const response = await axios.get(`${baseUrl}${getLanguage()}`)
  return response.data
}

const createUpcomingSermon = async (newItem) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${baseUrl}${getLanguage()}`, newItem, config)

  return response.data
}

const updateUpcomingSermon = async (id, updatedItem) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.put(`${baseUrl}${id}/${getLanguage()}`, updatedItem, config)

  return response.data
}

const deleteUpcomingSermon = async (id) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.delete(`${baseUrl}/${id}`, config)

  return response.data
}

const upcomingSermonsService = {
  getUpcomingSermons,
  createUpcomingSermon,
  updateUpcomingSermon,
  deleteUpcomingSermon,
}

export default upcomingSermonsService
