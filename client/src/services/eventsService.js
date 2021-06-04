import axios from 'axios'
const baseUrl = '/api/events/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getEvents = async () => {
  const response = await axios.get(`${baseUrl}/${getLanguage()}`)
  return response.data
}

const eventsService = {
  getEvents,
}

export default eventsService
