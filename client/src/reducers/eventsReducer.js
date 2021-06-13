import eventsService from '../services/eventsService'

import { setNotification } from '../reducers/notificationReducer'

const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_EVENTS': {
      return action.data.events
    }
    case 'CREATE_EVENT': {
      return state.concat(action.data.newItemResponse)
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

export const createEvent = (newItem) => {
  return async dispatch => {
    try {
      const newItemResponse =
        await eventsService.createEvent(newItem)

      dispatch({
        type: 'CREATE_EVENT',
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

export default eventsReducer