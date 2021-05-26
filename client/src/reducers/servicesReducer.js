import servicesService from '../services/servicesService'

const servicesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_SERVICES': {
      return action.data.services
    }
    default: {
      return state
    }
  }
}

export const getServices = () => {
  return async dispatch => {

    try {
      const services = await servicesService.getServices()

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