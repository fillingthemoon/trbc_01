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

const statementOfFaithService = {
  getStatementOfFaith,
}

export default statementOfFaithService
