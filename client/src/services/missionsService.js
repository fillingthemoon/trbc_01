import axios from 'axios'
const baseUrl = '/api/missions/'

const getMissions = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const missionsService = {
  getMissions,
}

export default missionsService
