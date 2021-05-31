import servicesService from '../services/servicesService'

const servicesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_SERVICES': {
      return action.data.services
    }
    case 'RESET_SERVICES': {
      return []
    }
    default: {
      return state
    }
  }
}

export const getServices = (type) => {
  return async dispatch => {

    try {
      dispatch({
        type: 'RESET_SERVICES',
      })

      let services = await servicesService.getServices()

      services = type
        ? services.filter(servicesItem => servicesItem.sectionName === type)
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

export default servicesReducer