import axios from 'axios'
const baseUrl = '/api/events/'

const getEvents = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const eventsService = {
  getEvents,
}

export default eventsService
