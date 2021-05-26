import outreachService from '../services/outreachService'

const outreachReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_OUTREACH': {
      return action.data.outreach
    }
    default: {
      return state
    }
  }
}

export const getOutreach = () => {
  return async dispatch => {

    try {
      const outreach = await outreachService.getOutreach()

      dispatch({
        type: 'GET_OUTREACH',
        data: {
          outreach,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default outreachReducer