import axios from 'axios'
const baseUrl = '/api/cec/'

const getCec = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const cecService = {
  getCec,
}

export default cecService
