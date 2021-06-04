import axios from 'axios'
const baseUrl = '/api/outreach/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getOutreach = async () => {
  const response = await axios.get(`${baseUrl}/${getLanguage()}`)
  return response.data
}

const outreachService = {
  getOutreach,
}

export default outreachService
