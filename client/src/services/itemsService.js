import axios from 'axios'
const baseUrl = '/api/items/'
import store from '../store'

const getLanguage = () => {
  const language = store.getState().language
  return language
}

const getItems = async () => {
  const response = await axios.get(`${baseUrl}all/${getLanguage()}`)
  return response.data
}

const getPages = async () => {
  const response = await axios.get(`${baseUrl}pages/${getLanguage()}`)
  return response.data
}

const getSections = async () => {
  const response = await axios.get(`${baseUrl}pages/${getLanguage()}`)

  const sections = response.data
    .map(pages => pages.pageSections)
    .flat()
    .map(section => section._id)

  return sections
}

const itemsService = {
  getItems,
  getPages,
  getSections,
}

export default itemsService
