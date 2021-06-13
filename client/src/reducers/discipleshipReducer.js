import discipleshipService from '../services/discipleshipService'

import { setNotification } from '../reducers/notificationReducer'

const discipleshipReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_DISCIPLESHIP': {
      return action.data.discipleship
    }
    case 'CREATE_DISCIPLESHIP': {
      return state.concat(action.data.newItemResponse)
    }
    default: {
      return state
    }
  }
}

export const getDiscipleship = () => {
  return async dispatch => {

    try {
      const discipleship = await discipleshipService.getDiscipleship()

      dispatch({
        type: 'GET_DISCIPLESHIP',
        data: {
          discipleship,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const createDiscipleship = (newItem) => {
  return async dispatch => {
    try {
      const newItemResponse =
        await discipleshipService.createDiscipleship(newItem)

      dispatch({
        type: 'CREATE_DISCIPLESHIP',
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

export default discipleshipReducer