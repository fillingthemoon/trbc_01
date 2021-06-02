import axios from 'axios'
const baseUrl = '/api/items/'

const getItem = async (id) => {
  const response = await axios.get(`${baseUrl}item/${id}`)
  return response.data
}

const getPages = async () => {
  const response = await axios.get(`${baseUrl}pages`)
  return response.data
}

const getSections = async () => {
  const response = await axios.get(`${baseUrl}pages`)

  const sections = response.data
    .map(pages => pages.items)
    .flat()
    .map(section => section._id)

  return sections
}

const itemsService = {
  getItem,
  getPages,
  getSections,
}

export default itemsService
