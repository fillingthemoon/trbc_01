import axios from 'axios'
const baseUrl = '/api/church-wide/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getChurchWide = async () => {
  const response = await axios.get(`${baseUrl}/${getLanguage()}`)
  return response.data
}

const createChurchWide = async (newItem) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${baseUrl}${getLanguage()}`, newItem, config)

  return response.data
}

const updateChurchWide = async (id, updatedItem) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.put(`${baseUrl}${id}/${getLanguage()}`, updatedItem, config)

  return response.data
}

const deleteChurchWide = async (id) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.delete(`${baseUrl}/${id}`, config)

  return response.data
}

const churchWideService = {
  getChurchWide,
  createChurchWide,
  updateChurchWide,
  deleteChurchWide,
}

export default churchWideService
