import upcomingSermonsService from '../services/upcomingSermonsService'

import { setNotification } from '../reducers/notificationReducer'

const upcomingSermonsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_UPCOMING_SERMONS': {
      return action.data.upcomingSermons
    }
    case 'CREATE_UPCOMING_SERMON': {
      return state.concat(action.data.upcomingSermonResponse)
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

export const createUpcomingSermon = (upcomingSermon) => {
  return async dispatch => {
    try {
      const upcomingSermonResponse =
        await upcomingSermonsService.createUpcomingSermon(upcomingSermon)

      dispatch({
        type: 'CREATE_UPCOMING_SERMON',
        data: {
          upcomingSermonResponse,
        }
      })
      dispatch(setNotification('success', 'Success! Please refresh to view new row.', 4))
    } catch (error) {
      dispatch(setNotification('error', error.response.data.error, 4))
    }
  }
}

export default upcomingSermonsReducer