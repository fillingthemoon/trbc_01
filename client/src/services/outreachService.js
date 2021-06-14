import axios from 'axios'
const baseUrl = '/api/outreach/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getOutreach = async () => {
  const response = await axios.get(`${baseUrl}/${getLanguage()}`)
  return response.data
}

const createOutreach = async (newItem) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${baseUrl}${getLanguage()}`, newItem, config)

  return response.data
}

const updateOutreach = async (id, updatedItem) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.put(`${baseUrl}${id}/${getLanguage()}`, updatedItem, config)

  return response.data
}

const deleteOutreach = async (id) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.delete(`${baseUrl}/${id}`, config)

  return response.data
}

const outreachService = {
  getOutreach,
  createOutreach,
  updateOutreach,
  deleteOutreach,
}

export default outreachService
