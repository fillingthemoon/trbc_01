import axios from 'axios'
const baseUrl = '/api/announcements/'

const getAnnouncements = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const announcementsService = {
  getAnnouncements,
}

export default announcementsService
