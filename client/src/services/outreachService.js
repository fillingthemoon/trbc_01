import axios from 'axios'
const baseUrl = '/api/outreach/'

const getOutreach = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const outreachService = {
  getOutreach,
}

export default outreachService
