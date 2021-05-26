import imNewService from '../services/imNewService'

const imNewReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_IM_NEW': {
      return action.data.imNew
    }
    default: {
      return state
    }
  }
}

export const getImNew = () => {
  return async dispatch => {

    try {
      const imNew = await imNewService.getImNew()

      dispatch({
        type: 'GET_IM_NEW',
        data: {
          imNew,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default imNewReducer