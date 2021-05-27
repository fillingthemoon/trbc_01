import axios from 'axios'
const baseUrl = '/api/items/'

const getPages = async () => {
  const response = await axios.get(`${baseUrl}/pages`)
  return response.data
}

const itemService = {
  getPages,
}

export default itemService
