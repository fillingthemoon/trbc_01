import missionsService from '../services/missionsService'

import { setNotification } from '../reducers/notificationReducer'

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MISSIONS': {
      return action.data.missions
    }
    case 'CREATE_MISSION': {
      return state.concat(action.data.newItemResponse)
    }
    case 'UPDATE_MISSION': {
      return state.map(item => item.id === action.data.id
        ? action.data.updatedItemResponse
        : item
      )
    }
    default: {
      return state
    }
  }
}

export const getMissions = () => {
  return async dispatch => {

    try {
      const missions = await missionsService.getMissions()

      dispatch({
        type: 'GET_MISSIONS',
        data: {
          missions,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const createMission = (newItem) => {
  return async dispatch => {
    try {
      const newItemResponse =
        await missionsService.createMission(newItem)

      dispatch({
        type: 'CREATE_MISSION',
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

export const updateMission = (id, updatedItem) => {
  return async dispatch => {
    try {
      const updatedItemResponse =
        await missionsService.updateMission(id, updatedItem)

      dispatch({
        type: 'UPDATE_MISSION',
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

export default missionsReducer