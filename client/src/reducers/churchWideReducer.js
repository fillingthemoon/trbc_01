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

export const getChurchWide = (sectionName=null) => {
  return async dispatch => {

    try {
      dispatch({
        type: 'RESET_CHURCH_WIDE',
      })

      let churchWide = await churchWideService.getChurchWide()

      churchWide = sectionName
        ? churchWide.filter(churchWideItem => churchWideItem.pageSection === sectionName)
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