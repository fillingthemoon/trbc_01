import outreachService from '../services/outreachService'

import { setNotification } from '../reducers/notificationReducer'

const outreachReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_OUTREACH': {
      return action.data.outreach
    }
    case 'CREATE_OUTREACH': {
      return state.concat(action.data.newItemResponse)
    }
    case 'UPDATE_OUTREACH': {
      return state.map(item => item.id === action.data.id
        ? action.data.updatedItemResponse
        : item
      )
    }
    case 'DELETE_OUTREACH': {
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

export const getOutreach = (sectionName=null) => {
  return async dispatch => {

    try {
      dispatch({
        type: 'RESET_SERVICES',
      })

      let outreach = await outreachService.getOutreach()

      outreach = sectionName
        ? outreach.filter(outreachItem => outreachItem.pageSection === sectionName)
        : outreach

      dispatch({
        type: 'GET_OUTREACH',
        data: {
          outreach,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const createOutreach = (newItem) => {
  return async dispatch => {
    try {
      const newItemResponse =
        await outreachService.createOutreach(newItem)

      dispatch({
        type: 'CREATE_OUTREACH',
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

export const updateOutreach = (id, updatedItem) => {
  return async dispatch => {
    try {
      const updatedItemResponse =
        await outreachService.updateOutreach(id, updatedItem)

      dispatch({
        type: 'UPDATE_OUTREACH',
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

export const deleteOutreach = (id) => {
  return async dispatch => {
    try {
      await outreachService.deleteOutreach(id)

      dispatch({
        type: 'DELETE_OUTREACH',
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

export default outreachReducer