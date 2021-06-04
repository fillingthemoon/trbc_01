import axios from 'axios'
const baseUrl = '/api/announcements/'

import store from '../store'

const getAnnouncements = async () => {
  const language = store.getState().language

  const response = await axios.get(`${baseUrl}/${language}`)
  return response.data
}

const announcementsService = {
  getAnnouncements,
}

export default announcementsService
