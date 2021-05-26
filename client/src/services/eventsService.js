import axios from 'axios'
const baseUrl = '/api/events/'

const getEvents = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const eventsService = {
  getEvents,
}

export default eventsService
