import ourTeamService from '../services/ourTeamService'

const ourTeamReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_OUR_TEAM': {
      return action.data.ourTeam
    }
    case 'RESET_SERVICES': {
      return []
    }
    default: {
      return state
    }
  }
}

export const getOurTeam = (sectionName=null) => {
  return async dispatch => {

    try {
      dispatch({
        type: 'RESET_SERVICES',
      })

      let ourTeam = await ourTeamService.getOurTeam()

      ourTeam = sectionName
        ? ourTeam.filter(ourTeamItem => ourTeamItem.pageSection === sectionName)
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