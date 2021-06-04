import axios from 'axios'
const baseUrl = '/api/discipleship/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getDiscipleship = async () => {
  const response = await axios.get(`${baseUrl}/${getLanguage()}`)
  return response.data
}

const discipleshipService = {
  getDiscipleship,
}

export default discipleshipService
