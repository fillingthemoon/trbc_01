import ourTeamService from '../services/ourTeamService'

import { setNotification } from '../reducers/notificationReducer'

const ourTeamReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_OUR_TEAM': {
      return action.data.ourTeam
    }
    case 'CREATE_OUR_TEAM': {
      return state.concat(action.data.newItemResponse)
    }
    case 'UPDATE_OUR_TEAM': {
      return state.map(item => item.id === action.data.id
        ? action.data.updatedItemResponse
        : item
      )
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

export const createOurTeam = (newItem) => {
  return async dispatch => {
    try {
      const newItemResponse =
        await ourTeamService.createOurTeam(newItem)

      dispatch({
        type: 'CREATE_OUR_TEAM',
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

export const updateOurTeam = (id, updatedItem) => {
  return async dispatch => {
    try {
      const updatedItemResponse =
        await ourTeamService.updateOurTeam(id, updatedItem)

      dispatch({
        type: 'UPDATE_OUR_TEAM',
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

export default ourTeamReducer