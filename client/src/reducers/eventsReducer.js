import eventsService from '../services/eventsService'

const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_EVENTS': {
      return action.data.events
    }
    default: {
      return state
    }
  }
}

export const getEvents = () => {
  return async dispatch => {

    try {
      const events = await eventsService.getEvents()

      dispatch({
        type: 'GET_EVENTS',
        data: {
          events,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default eventsReducer