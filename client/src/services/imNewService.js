import axios from 'axios'
const baseUrl = '/api/im-new/'

const getImNew = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const imNewService = {
  getImNew,
}

export default imNewService
