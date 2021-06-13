import axios from 'axios'
const baseUrl = '/api/services/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getServices = async () => {
  const response = await axios.get(`${baseUrl}/${getLanguage()}`)
  return response.data
}

const createService = async (newItem) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${baseUrl}${getLanguage()}`, newItem, config)

  return response.data
}

const servicesService = {
  getServices,
  createService,
}

export default servicesService
