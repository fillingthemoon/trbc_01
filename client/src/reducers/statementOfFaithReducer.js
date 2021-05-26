import statementOfFaithService from '../services/statementOfFaithService'

const statementOfFaithReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_STATEMENT_OF_FAITH': {
      return action.data.statementOfFaith
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

export default statementOfFaithReducer