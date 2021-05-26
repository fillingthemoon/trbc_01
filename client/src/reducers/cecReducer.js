import cecService from '../services/cecService'

const cecReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_CEC': {
      return action.data.cec
    }
    default: {
      return state
    }
  }
}

export const getCec = () => {
  return async dispatch => {

    try {
      const cec = await cecService.getCec()

      dispatch({
        type: 'GET_CEC',
        data: {
          cec,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default cecReducer