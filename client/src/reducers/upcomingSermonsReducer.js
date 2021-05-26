import announcementsService from '../services/announcementsService'

const episodeLinesReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_ANNOUNCEMENTS': {
      return action.data.announcements
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

export default episodeLinesReducer