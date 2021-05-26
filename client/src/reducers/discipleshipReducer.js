import discipleshipService from '../services/discipleshipService'

const discipleshipReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_DISCIPLESHIP': {
      return action.data.discipleship
    }
    default: {
      return state
    }
  }
}

export const getDiscipleship = () => {
  return async dispatch => {

    try {
      const discipleship = await discipleshipService.getDiscipleship()

      dispatch({
        type: 'GET_DISCIPLESHIP',
        data: {
          discipleship,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default discipleshipReducer