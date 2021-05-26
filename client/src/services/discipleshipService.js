import axios from 'axios'
const baseUrl = '/api/discipleship/'

const getDiscipleship = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const discipleshipService = {
  getDiscipleship,
}

export default discipleshipService
