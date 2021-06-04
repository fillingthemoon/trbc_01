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

const servicesService = {
  getServices,
}

export default servicesService
