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

export default episodeLinesReducer