const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case 'SET_LANGUAGE': {
      return action.data.language
    }
    default: {
      return state
    }
  }
}

export const setLanguage = (language) => {
  return async dispatch => {

    try {
      dispatch({
        type: 'SET_LANGUAGE',
        data: {
          language,
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default languageReducer