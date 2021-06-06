const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case 'SET_LANGUAGE': {
      return action.data.language
    }
    case 'STAY_AT_CURRENT_LANGUAGE': {
      return action.data.language
    }
    default: {
      return state
    }
  }
}

export const setLanguage = (language) => {
  return async dispatch => {

    const currentLanguage = {
      language
    }
    window.localStorage.setItem('currentLanguage', JSON.stringify(currentLanguage))

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

export const stayAtCurrentLanguage = (currentLanguage) => {
  return async dispatch => {
    const language = currentLanguage.language

    dispatch({
      type: 'STAY_AT_CURRENT_LANGUAGE',
      data: {
        language,
      }
    })
  }
}

export default languageReducer