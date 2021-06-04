import axios from 'axios'
const baseUrl = '/api/im-new/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getImNew = async () => {
  const response = await axios.get(`${baseUrl}/${getLanguage()}`)
  return response.data
}

const imNewService = {
  getImNew,
}

export default imNewService
