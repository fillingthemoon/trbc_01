import axios from 'axios'
const baseUrl = '/api/announcements/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getAnnouncements = async () => {
  const response = await axios.get(`${baseUrl}/${getLanguage()}`)
  return response.data
}

const announcementsService = {
  getAnnouncements,
}

export default announcementsService
