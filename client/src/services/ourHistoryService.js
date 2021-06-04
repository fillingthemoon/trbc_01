import axios from 'axios'
const baseUrl = '/api/our-history/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getOurHistory = async () => {
  const response = await axios.get(`${baseUrl}/${getLanguage()}`)
  return response.data
}

const ourHistoryService = {
  getOurHistory,
}

export default ourHistoryService
