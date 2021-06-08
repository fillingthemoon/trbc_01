import axios from 'axios'
const baseUrl = '/api/church-wide/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getChurchWide = async () => {
  const response = await axios.get(`${baseUrl}/${getLanguage()}`)
  return response.data
}

const churchWideService = {
  getChurchWide,
}

export default churchWideService
