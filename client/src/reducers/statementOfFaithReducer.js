import statementOfFaithService from '../services/statementOfFaithService'

import { setNotification } from '../reducers/notificationReducer'

const statementOfFaithReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_STATEMENT_OF_FAITH': {
      return action.data.statementOfFaith
    }
    case 'CREATE_STATEMENT_OF_FAITH': {
      return state.concat(action.data.newItemResponse)
    }
    case 'UPDATE_STATEMENT_OF_FAITH': {
      return state.map(item => item.id === action.data.id
        ? action.data.updatedItemResponse
        : item
      )
    }
    case 'DELETE_STATEMENT_OF_FAITH': {
      return state.filter(upcomingSermon => upcomingSermon.id !== action.data.id)
    }
    default: {
      return state
    }
  }
}

export const getStatementOfFaith = () => {
  return async dispatch => {

    try {
      const statementOfFaith = await statementOfFaithService.getStatementOfFaith()

      dispatch({
        type: 'GET_STATEMENT_OF_FAITH',
        data: {
          statementOfFaith,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const createStatementOfFaith = (newItem) => {
  return async dispatch => {
    try {
      const newItemResponse =
        await statementOfFaithService.createStatementOfFaith(newItem)

      dispatch({
        type: 'CREATE_STATEMENT_OF_FAITH',
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

export const updateStatementOfFaith = (id, updatedItem) => {
  return async dispatch => {
    try {
      const updatedItemResponse =
        await statementOfFaithService.updateStatementOfFaith(id, updatedItem)

      dispatch({
        type: 'UPDATE_STATEMENT_OF_FAITH',
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

export const deleteStatementOfFaith = (id) => {
  return async dispatch => {
    try {
      await statementOfFaithService.deleteStatementOfFaith(id)

      dispatch({
        type: 'DELETE_STATEMENT_OF_FAITH',
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

export default statementOfFaithReducer