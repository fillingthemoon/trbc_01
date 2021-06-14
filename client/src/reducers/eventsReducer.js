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
    case 'UPDATE_EVENT': {
      return state.map(item => item.id === action.data.id
        ? action.data.updatedItemResponse
        : item
      )
    }
    case 'DELETE_EVENT': {
      return state.filter(upcomingSermon => upcomingSermon.id !== action.data.id)
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

export const updateEvent = (id, updatedItem) => {
  return async dispatch => {
    try {
      const updatedItemResponse =
        await eventsService.updateEvent(id, updatedItem)

      dispatch({
        type: 'UPDATE_EVENT',
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

export const deleteEvent = (id) => {
  return async dispatch => {
    try {
      await eventsService.deleteEvent(id)

      dispatch({
        type: 'DELETE_EVENT',
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

export default eventsReducer