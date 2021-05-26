import axios from 'axios'
const baseUrl = '/api/cec/'

const getCec = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const cecService = {
  getCec,
}

export default cecService
