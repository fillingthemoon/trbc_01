import axios from 'axios'
const baseUrl = '/api/our-team/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getOurTeam = async () => {
  const response = await axios.get(`${baseUrl}/${getLanguage()}`)
  return response.data
}

const ourTeamService = {
  getOurTeam,
}

export default ourTeamService
