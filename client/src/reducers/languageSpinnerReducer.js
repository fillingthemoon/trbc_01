const languageSpinnerReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE_SPINNER': {
      return action.data.spinnerState
    }
    default: {
      return state
    }
  }
}

export const setLanguageSpinner = (spinnerState) => {
  return async dispatch => {
    try {
      dispatch({
        type: 'SET_LANGUAGE_SPINNER',
        data: {
          spinnerState
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default languageSpinnerReducer