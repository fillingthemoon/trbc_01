import servicesService from '../services/servicesService'

import { setNotification } from '../reducers/notificationReducer'

const servicesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_SERVICES': {
      return action.data.services
    }
    case 'CREATE_SERVICE': {
      return state.concat(action.data.newItemResponse)
    }
    case 'UPDATE_SERVICE': {
      return state.map(item => item.id === action.data.id
        ? action.data.updatedItemResponse
        : item
      )
    }
    case 'DELETE_SERVICE': {
      return state.filter(upcomingSermon => upcomingSermon.id !== action.data.id)
    }
    case 'RESET_SERVICES': {
      return []
    }
    default: {
      return state
    }
  }
}

export const getServices = (sectionName=null) => {
  return async dispatch => {

    try {
      dispatch({
        type: 'RESET_SERVICES',
      })

      let services = await servicesService.getServices()

      services = sectionName
        ? services.filter(servicesItem => servicesItem.pageSection === sectionName)
        : services

      dispatch({
        type: 'GET_SERVICES',
        data: {
          services,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const createService = (newItem) => {
  return async dispatch => {
    try {
      const newItemResponse =
        await servicesService.createService(newItem)

      dispatch({
        type: 'CREATE_SERVICE',
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

export const updateService = (id, updatedItem) => {
  return async dispatch => {
    try {
      const updatedItemResponse =
        await servicesService.updateService(id, updatedItem)

      dispatch({
        type: 'UPDATE_SERVICE',
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

export const deleteService = (id) => {
  return async dispatch => {
    try {
      await servicesService.deleteService(id)

      dispatch({
        type: 'DELETE_SERVICE',
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

export default servicesReducer