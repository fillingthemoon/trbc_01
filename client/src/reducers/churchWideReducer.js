import churchWideService from '../services/churchWideService'

const churchWideReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_CHURCH_WIDE': {
      return action.data.churchWide
    }
    case 'RESET_CHURCH_WIDE': {
      return []
    }
    default: {
      return state
    }
  }
}

export const getChurchWide = (type) => {
  return async dispatch => {

    try {
      dispatch({
        type: 'RESET_CHURCH_WIDE',
      })

      let churchWide = await churchWideService.getChurchWide()

      churchWide = type
        ? churchWide.filter(churchWideItem => churchWideItem.pageSection === type)
        : churchWide

      dispatch({
        type: 'GET_CHURCH_WIDE',
        data: {
          churchWide,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default churchWideReducer