import ourHistoryService from '../services/ourHistoryService'

const ourHistoryReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_OUR_HISTORY': {
      return action.data.ourHistory
    }
    default: {
      return state
    }
  }
}

export const getOurHistory = () => {
  return async dispatch => {

    try {
      const ourHistory = await ourHistoryService.getOurHistory()

      dispatch({
        type: 'GET_OUR_HISTORY',
        data: {
          ourHistory,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default ourHistoryReducer