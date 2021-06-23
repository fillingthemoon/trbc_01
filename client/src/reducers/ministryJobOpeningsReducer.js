import ministryJobOpeningsService from '../services/ministryJobOpeningsService'

import { setNotification } from '../reducers/notificationReducer'

const ministryJobOpeningsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MINISTRY_JOB_OPENINGS': {
      return action.data.ministryJobOpenings
    }
    case 'CREATE_MINISTRY_JOB_OPENING': {
      return state.concat(action.data.newItemResponse)
    }
    case 'UPDATE_MINISTRY_JOB_OPENING': {
      return state.map(item => item.id === action.data.id
        ? action.data.updatedItemResponse
        : item
      )
    }
    case 'DELETE_MINISTRY_JOB_OPENING': {
      return state.filter(ministryJobOpening => ministryJobOpening.id !== action.data.id)
    }
    default: {
      return state
    }
  }
}

export const getMinistryJobOpenings = () => {
  return async dispatch => {
    try {
      const ministryJobOpenings = await ministryJobOpeningsService.getMinistryJobOpenings()

      dispatch({
        type: 'GET_MINISTRY_JOB_OPENINGS',
        data: {
          ministryJobOpenings,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const createMinistryJobOpening = (newItem) => {
  return async dispatch => {
    try {
      const newItemResponse =
        await ministryJobOpeningsService.createMinistryJobOpening(newItem)

      dispatch({
        type: 'CREATE_MINISTRY_JOB_OPENING',
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

export const updateMinistryJobOpening = (id, updatedItem) => {
  return async dispatch => {
    try {
      const updatedItemResponse =
        await ministryJobOpeningsService.updateMinistryJobOpening(id, updatedItem)

      dispatch({
        type: 'UPDATE_MINISTRY_JOB_OPENING',
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

export const deleteMinistryJobOpening = (id) => {
  return async dispatch => {
    try {
      await ministryJobOpeningsService.deleteMinistryJobOpening(id)

      dispatch({
        type: 'DELETE_MINISTRY_JOB_OPENING',
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

export default ministryJobOpeningsReducer