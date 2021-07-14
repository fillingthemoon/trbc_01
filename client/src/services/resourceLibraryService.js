import axios from 'axios'
const baseUrl = '/api/resource-library/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getResourceLibrary = async () => {
  const response = await axios.get(`${baseUrl}${getLanguage()}`)
  return response.data
}

const createResourceLibrary = async (newItem) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${baseUrl}${getLanguage()}`, newItem, config)

  return response.data
}

const updateResourceLibrary = async (id, updatedItem) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.put(`${baseUrl}${id}/${getLanguage()}`, updatedItem, config)

  return response.data
}

const deleteResourceLibrary = async (id) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.delete(`${baseUrl}/${id}`, config)

  return response.data
}

const resourceLibrarysService = {
  getResourceLibrary,
  createResourceLibrary,
  updateResourceLibrary,
  deleteResourceLibrary,
}

export default resourceLibrarysService
