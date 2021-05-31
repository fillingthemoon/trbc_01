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

export const getOurTeam = (type = null) => {
  return async dispatch => {

    try {
      let ourTeam = await ourTeamService.getOurTeam()

      ourTeam = type
        ? ourTeam.filter(ourTeamItem => ourTeamItem.sectionName === type)
        : ourTeam

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