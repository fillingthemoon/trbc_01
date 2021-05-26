import axios from 'axios'
const baseUrl = '/api/upcoming-sermons/'

const getUpcomingSermons = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const upcomingSermonsService = {
  getUpcomingSermons,
}

export default upcomingSermonsService
