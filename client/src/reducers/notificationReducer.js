const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        type: action.data.type,
        description: action.data.description
      }
    case 'REMOVE_NOTIFICATION':
      return null
  }
  return state
}

let timeoutId = null

export const setNotification = (type, description, duration) => {
  return async dispatch => {

    // Remove bug where prior timeouts execute
    clearTimeout(timeoutId)

    dispatch({
      type: 'ADD_NOTIFICATION',
      data: {
        type,
        description,
      }
    })

    timeoutId = setTimeout(() => {
      dispatch({
        type: 'REMOVE_NOTIFICATION',
      })
    }, duration * 1000)
  }
}

export default notificationReducer