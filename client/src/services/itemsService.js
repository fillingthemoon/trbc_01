import axios from 'axios'
const baseUrl = '/api/items/'

const getPages = async () => {
  const response = await axios.get(`${baseUrl}/pages`)
  return response.data
}

const getSections = async () => {
  const response = await axios.get(`${baseUrl}/pages`)

  const sections = response.data
    .map(pages => pages.items)
    .flat()
    .map(section => section._id)

  return sections
}

const itemsService = {
  getPages,
  getSections,
}

export default itemsService