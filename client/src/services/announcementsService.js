import axios from 'axios'
const baseUrl = '/api/announcements/'

const getAnnouncements = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const announcementsService = {
  getAnnouncements,
}

export default announcementsService
