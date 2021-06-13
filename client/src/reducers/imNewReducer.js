import imNewService from '../services/imNewService'

import { setNotification } from '../reducers/notificationReducer'

const imNewReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_IM_NEW': {
      return action.data.imNew
    }
    case 'CREATE_IM_NEW': {
      return state.concat(action.data.newItemResponse)
    }
    default: {
      return state
    }
  }
}

export const getImNew = () => {
  return async dispatch => {

    try {
      const imNew = await imNewService.getImNew()

      dispatch({
        type: 'GET_IM_NEW',
        data: {
          imNew,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const createImNew = (newItem) => {
  return async dispatch => {
    try {
      const newItemResponse =
        await imNewService.createImNew(newItem)

      dispatch({
        type: 'CREATE_IM_NEW',
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

export default imNewReducer