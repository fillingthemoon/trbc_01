import ourTeamService from '../services/ourTeamService'

const ourTeamReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_OUR_TEAM': {
      return action.data.ourTeam
    }
    default: {
      return state
    }
  }
}

export const getOurTeam = () => {
  return async dispatch => {

    try {
      const ourTeam = await ourTeamService.getOurTeam()

      dispatch({
        type: 'GET_OUR_TEAM',
        data: {
          ourTeam,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default ourTeamReducer