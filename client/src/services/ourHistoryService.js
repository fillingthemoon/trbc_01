import axios from 'axios'
const baseUrl = '/api/our-history/'

const getOurHistory = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const ourHistoryService = {
  getOurHistory,
}

export default ourHistoryService
