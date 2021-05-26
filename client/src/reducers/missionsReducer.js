import missionsService from '../services/missionsService'

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_MISSIONS': {
      return action.data.missions
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

export default missionsReducer