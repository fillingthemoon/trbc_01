import itemsService from '../services/itemsService'

import { convertName } from '../helper-files/helperFunctions'

const initialState = {
  item: null,
  pages: [],
  sections: []
}

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEM': {
      return {
        ...state,
        item: action.data.item,
      }
    }
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

export const getItem = (id) => {
  return async dispatch => {

    try {
      const item = await itemsService.getItem(id)

      dispatch({
        type: 'GET_ITEM',
        data: {
          item,
        }
      })
    } catch (error) {
      console.log(error)
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
      const convertedSections = sections.map(sectionName => convertName('proper', 'dashed', sectionName))

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