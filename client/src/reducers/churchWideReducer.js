import churchWideService from '../services/churchWideService'

import { setNotification } from '../reducers/notificationReducer'

const churchWideReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_CHURCH_WIDE': {
      return action.data.churchWide
    }
    case 'CREATE_CHURCH_WIDE': {
      return state.concat(action.data.newItemResponse)
    }
    case 'UPDATE_CHURCH_WIDE': {
      return state.map(item => item.id === action.data.id
        ? action.data.updatedItemResponse
        : item
      )
    }
    case 'RESET_CHURCH_WIDE': {
      return []
    }
    default: {
      return state
    }
  }
}

export const getChurchWide = (sectionName=null) => {
  return async dispatch => {

    try {
      dispatch({
        type: 'RESET_CHURCH_WIDE',
      })

      let churchWide = await churchWideService.getChurchWide()

      churchWide = sectionName
        ? churchWide.filter(churchWideItem => churchWideItem.pageSection === sectionName)
        : churchWide

      dispatch({
        type: 'GET_CHURCH_WIDE',
        data: {
          churchWide,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const createChurchWide = (newItem) => {
  return async dispatch => {
    try {
      const newItemResponse =
        await churchWideService.createChurchWide(newItem)

      dispatch({
        type: 'CREATE_CHURCH_WIDE',
        data: {
          newItemResponse,
        }
      })
      dispatch(setNotification('success', 'Successfully added! Please refresh to view.', 4))
    } catch (error) {
      dispatch(setNotification('error', error.response.data.error, 4))
    }
  }
}

export const updateChurchWide = (id, updatedItem) => {
  return async dispatch => {
    try {
      const updatedItemResponse =
        await churchWideService.updateChurchWide(id, updatedItem)

      dispatch({
        type: 'UPDATE_CHURCH_WIDE',
        data: {
          id,
          updatedItemResponse,
        }
      })
      dispatch(setNotification('success', 'Successfully updated! Please refresh to view.', 4))
    } catch (error) {
      dispatch(setNotification('error', error.response.data.error, 4))
    }
  }
}

export default churchWideReducer