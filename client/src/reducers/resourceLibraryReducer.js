import resourceLibraryService from '../services/resourceLibraryService'

import { setNotification } from '../reducers/notificationReducer'

const resourceLibraryReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_RESOURCE_LIBRARY': {
      return action.data.resourceLibrary
    }
    case 'CREATE_RESOURCE_LIBRARY': {
      return state.concat(action.data.newItemResponse)
    }
    case 'UPDATE_RESOURCE_LIBRARY': {
      return state.map(item => item.id === action.data.id
        ? action.data.updatedItemResponse
        : item
      )
    }
    case 'DELETE_RESOURCE_LIBRARY': {
      return state.filter(resourceLibrary => resourceLibrary.id !== action.data.id)
    }
    default: {
      return state
    }
  }
}

export const getResourceLibrary = () => {
  return async dispatch => {
    try {
      const resourceLibrary = await resourceLibraryService.getResourceLibrary()

      dispatch({
        type: 'GET_RESOURCE_LIBRARY',
        data: {
          resourceLibrary,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const createResourceLibrary = (newItem) => {
  return async dispatch => {
    try {
      const newItemResponse =
        await resourceLibraryService.createResourceLibrary(newItem)

      dispatch({
        type: 'CREATE_RESOURCE_LIBRARY',
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

export const updateResourceLibrary = (id, updatedItem) => {
  return async dispatch => {
    try {
      const updatedItemResponse =
        await resourceLibraryService.updateResourceLibrary(id, updatedItem)

      dispatch({
        type: 'UPDATE_RESOURCE_LIBRARY',
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

export const deleteResourceLibrary = (id) => {
  return async dispatch => {
    try {
      await resourceLibraryService.deleteResourceLibrary(id)

      dispatch({
        type: 'DELETE_RESOURCE_LIBRARY',
        data: {
          id
        }
      })
      dispatch(setNotification('success', 'Successfully deleted! Please refresh to view.', 4))
    } catch (error) {
      dispatch(setNotification('error', error.response.data.error, 4))
    }
  }
}

export default resourceLibraryReducer