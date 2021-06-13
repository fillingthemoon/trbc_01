import itemsService from '../services/itemsService'

import { convertName } from '../helper-files/helperFunctions'

import { setNotification } from '../reducers/notificationReducer'

const initialState = {
  items: [],
  pages: [],
  sections: []
}

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEMS': {
      return {
        ...state,
        items: action.data.items,
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

export const getItems = () => {
  return async dispatch => {

    try {
      const items = await itemsService.getItems()

      dispatch({
        type: 'GET_ITEMS',
        data: {
          items,
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
      const convertedSections = sections.map(pageSection => convertName('proper', 'dashed', pageSection))

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