import itemsService from '../services/itemsService'

import { convertSectionName } from '../helper-files/helperFunctions'

const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PAGES': {
      return {
        ...state,
        pages: action.data.pages,
      }
    }
    case 'GET_SECTIONS': {
      return {
        ...state,
        sections: action.data.convertedSections,
      }
    }
    default: {
      return state
    }
  }
}

export const getPages = () => {
  return async dispatch => {

    try {
      const pages = await itemsService.getPages()

      dispatch({
        type: 'GET_PAGES',
        data: {
          pages,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const getSections = () => {
  return async dispatch => {

    try {
      const sections = await itemsService.getSections()
      const convertedSections = sections.map(sectionName => convertSectionName(sectionName))

      dispatch({
        type: 'GET_SECTIONS',
        data: {
          convertedSections,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default itemsReducer