import axios from 'axios'
const baseUrl = '/api/statement-of-faith/'

const getStatementOfFaith = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const statementOfFaithService = {
  getStatementOfFaith,
}

export default statementOfFaithService
