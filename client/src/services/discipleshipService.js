import axios from 'axios'
const baseUrl = '/api/discipleship/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getDiscipleship = async () => {
  const response = await axios.get(`${baseUrl}/${getLanguage()}`)
  return response.data
}

const createDiscipleship = async (newItem) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${baseUrl}${getLanguage()}`, newItem, config)

  return response.data
}

const updateDiscipleship = async (id, updatedItem) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.put(`${baseUrl}${id}/${getLanguage()}`, updatedItem, config)

  return response.data
}

const deleteDiscipleship = async (id) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.delete(`${baseUrl}/${id}`, config)

  return response.data
}

const discipleshipService = {
  getDiscipleship,
  createDiscipleship,
  updateDiscipleship,
  deleteDiscipleship,
}

export default discipleshipService
