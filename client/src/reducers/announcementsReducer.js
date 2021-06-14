import announcementsService from '../services/announcementsService'

import { setNotification } from '../reducers/notificationReducer'

const episodeLinesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ANNOUNCEMENTS': {
      return action.data.announcements
    }
    case 'CREATE_ANNOUNCEMENT': {
      return state.concat(action.data.newItemResponse)
    }
    case 'UPDATE_ANNOUNCEMENT': {
      return state.map(item => item.id === action.data.id
        ? action.data.updatedItemResponse
        : item
      )
    }
    case 'DELETE_ANNOUNCEMENT': {
      return state.filter(upcomingSermon => upcomingSermon.id !== action.data.id)
    }
    default: {
      return state
    }
  }
}

export const getAnnouncements = () => {
  return async dispatch => {

    try {
      const announcements = await announcementsService.getAnnouncements()

      dispatch({
        type: 'GET_ANNOUNCEMENTS',
        data: {
          announcements,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const createAnnouncement = (newItem) => {
  return async dispatch => {
    try {
      const newItemResponse =
        await announcementsService.createAnnouncement(newItem)

      dispatch({
        type: 'CREATE_ANNOUNCEMENT',
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

export const updateAnnouncement = (id, updatedItem) => {
  return async dispatch => {
    try {
      const updatedItemResponse =
        await announcementsService.updateAnnouncement(id, updatedItem)

      dispatch({
        type: 'UPDATE_ANNOUNCEMENT',
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

export const deleteAnnouncement = (id) => {
  return async dispatch => {
    try {
      await announcementsService.deleteAnnouncement(id)

      dispatch({
        type: 'DELETE_ANNOUNCEMENT',
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

export default episodeLinesReducer