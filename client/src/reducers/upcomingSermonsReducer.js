import upcomingSermonsService from '../services/upcomingSermonsService'

import { setNotification } from '../reducers/notificationReducer'

import { filterItemByLanguage } from '../helper-files/helperFunctions'

const upcomingSermonsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_UPCOMING_SERMONS': {
      return action.data.upcomingSermons
    }
    case 'CREATE_UPCOMING_SERMON': {
      return state.concat(action.data.newItemResponse)
    }
    case 'DELETE_UPCOMING_SERMON': {
      return state.filter(upcomingSermon => upcomingSermon.id !== action.data.id)
    }
    case 'UPDATE_UPCOMING_SERMON': {
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

export const getUpcomingSermons = () => {
  return async dispatch => {
    try {
      const upcomingSermons = await upcomingSermonsService.getUpcomingSermons()

      dispatch({
        type: 'GET_UPCOMING_SERMONS',
        data: {
          upcomingSermons,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const createUpcomingSermon = (newItem) => {
  return async dispatch => {
    try {
      const newItemResponse =
        await upcomingSermonsService.createUpcomingSermon(newItem)

      dispatch({
        type: 'CREATE_UPCOMING_SERMON',
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

export const updateUpcomingSermon = (id, updatedItem) => {
  return async dispatch => {
    try {
      const updatedItemResponse =
        await upcomingSermonsService.updateUpcomingSermon(id, updatedItem)

      dispatch({
        type: 'UPDATE_UPCOMING_SERMON',
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

export const deleteUpcomingSermon = (id) => {
  return async dispatch => {
    try {
      await upcomingSermonsService.deleteUpcomingSermon(id)

      dispatch({
        type: 'DELETE_UPCOMING_SERMON',
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

export default upcomingSermonsReducer