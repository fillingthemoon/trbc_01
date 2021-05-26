import axios from 'axios'
const baseUrl = '/api/services/'

const getServices = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const servicesService = {
  getServices,
}

export default servicesService
