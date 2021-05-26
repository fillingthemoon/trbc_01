import upcomingSermonsService from '../services/upcomingSermonsService'

const upcomingSermonsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_UPCOMING_SERMONS': {
      return action.data.upcomingSermons
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

export default upcomingSermonsReducer