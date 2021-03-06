import loginService from '../services/loginService'
// import upcomingSermonsService from '../services/upcomingSermonsService'

import { setNotification } from '../reducers/notificationReducer'

const loggedInUserReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOG_USER_IN':
      return action.data.user
    case 'STAY_LOGGED_IN':
      return action.data.user
    case 'LOG_USER_OUT':
      return null
  }
  return state
}

export const logUserIn = (username, password) => {
  return async dispatch => {
    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem('loggedInAdminUser', JSON.stringify(user))
      // upcomingSermonsService.setToken(user.token)
      dispatch(setNotification('success', 'Log in successful!', 1))

      dispatch({
        type: 'LOG_USER_IN',
        data: {
          user,
        }
      })
    } catch (error) {
      dispatch(setNotification('error', 'Invalid username or password', 3))
    }
  }
}

export const stayLoggedIn = (loggedInUser) => {
  return async dispatch => {
    try {
      const user = await loginService.stayLoggedIn({
        username: loggedInUser.username
      })

      dispatch({
        type: 'STAY_LOGGED_IN',
        data: {
          user,
        },
      })
    } catch (error) {
      dispatch(setNotification('error', 'Login session has expired. Please log out and log in again.', 5))
      window.localStorage.removeItem('loggedInAdminUser')
      logUserOut()
    }
  }
}

export const logUserOut = () => {
  return async dispatch => {
    // dispatch(setNotification('success', 'Log out successful!', 3))

    dispatch({
      type: 'LOG_USER_OUT',
    })
  }
}

export default loggedInUserReducer