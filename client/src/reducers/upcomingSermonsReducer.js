import upcomingSermonsService from '../services/upcomingSermonsService'

import { setNotification } from '../reducers/notificationReducer'

import { filterItemByLanguage } from '../helper-files/helperFunctions'

const upcomingSermonsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_UPCOMING_SERMONS': {
      return action.data.upcomingSermons
    }
    case 'CREATE_UPCOMING_SERMON': {
      return state.concat(action.data.filteredUpcomingSermonResponse)
    }
    case 'DELETE_UPCOMING_SERMON': {
      return state.filter(upcomingSermon => upcomingSermon.id !== action.data.id)
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

export const createUpcomingSermon = (upcomingSermon, currLanguage) => {
  return async dispatch => {
    try {
      const upcomingSermonResponse =
        await upcomingSermonsService.createUpcomingSermon(upcomingSermon)

      const filteredUpcomingSermonResponse =
        filterItemByLanguage(upcomingSermonResponse, currLanguage)

      dispatch({
        type: 'CREATE_UPCOMING_SERMON',
        data: {
          filteredUpcomingSermonResponse,
        }
      })
      dispatch(setNotification('success', 'Successfully added! Please refresh to view.', 4))
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