import ourHistoryService from '../services/ourHistoryService'

import { setNotification } from '../reducers/notificationReducer'

const ourHistoryReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_OUR_HISTORY': {
      return action.data.ourHistory
    }
    case 'CREATE_OUR_HISTORY': {
      return state.concat(action.data.newItemResponse)
    }
    case 'UPDATE_OUR_HISTORY': {
      return state.map(item => item.id === action.data.id
        ? action.data.updatedItemResponse
        : item
      )
    }
    default: {
      return state
    }
  }
}

export const getOurHistory = () => {
  return async dispatch => {

    try {
      const ourHistory = await ourHistoryService.getOurHistory()

      dispatch({
        type: 'GET_OUR_HISTORY',
        data: {
          ourHistory,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const createOurHistory = (newItem) => {
  return async dispatch => {
    try {
      const newItemResponse =
        await ourHistoryService.createOurHistory(newItem)

      dispatch({
        type: 'CREATE_OUR_HISTORY',
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

export const updateOurHistory = (id, updatedItem) => {
  return async dispatch => {
    try {
      const updatedItemResponse =
        await ourHistoryService.updateOurHistory(id, updatedItem)

      dispatch({
        type: 'UPDATE_OUR_HISTORY',
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

export default ourHistoryReducer