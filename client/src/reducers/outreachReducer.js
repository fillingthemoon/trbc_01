import outreachService from '../services/outreachService'

const outreachReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_OUTREACH': {
      return action.data.outreach
    }
    case 'RESET_SERVICES': {
      return []
    }
    default: {
      return state
    }
  }
}

export const getOutreach = (type) => {
  return async dispatch => {

    try {
      dispatch({
        type: 'RESET_SERVICES',
      })

      let outreach = await outreachService.getOutreach()

      outreach = type
        ? outreach.filter(outreachItem => outreachItem.pageSection === type)
        : outreach

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