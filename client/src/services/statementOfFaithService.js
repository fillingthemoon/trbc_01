import axios from 'axios'
const baseUrl = '/api/statement-of-faith/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getStatementOfFaith = async () => {
  const response = await axios.get(`${baseUrl}/${getLanguage()}`)
  return response.data
}

const createStatementOfFaith = async (newItem) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${baseUrl}${getLanguage()}`, newItem, config)

  return response.data
}

const updateStatementOfFaith = async (id, updatedItem) => {
  const token = `bearer ${JSON.parse(localStorage.loggedInAdminUser).token}`
  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.put(`${baseUrl}${id}/${getLanguage()}`, updatedItem, config)

  return response.data
}

const statementOfFaithService = {
  getStatementOfFaith,
  createStatementOfFaith,
}

export default statementOfFaithService
