import axios from 'axios'
const baseUrl = '/api/missions/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getMissions = async () => {
  const response = await axios.get(`${baseUrl}/${getLanguage()}`)
  return response.data
}

const missionsService = {
  getMissions,
}

export default missionsService
