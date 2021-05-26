import axios from 'axios'
const baseUrl = '/api/discipleship/'

const getDiscipleship = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const discipleshipService = {
  getDiscipleship,
}

export default discipleshipService
