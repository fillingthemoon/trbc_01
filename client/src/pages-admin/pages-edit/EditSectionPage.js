import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setNotification } from '../../reducers/notificationReducer'

const EditSectionPage = () => {
  const loggedInUser = useSelector(state => state.loggedInUser)

  const dispatch = useDispatch()

  return (
    <div>
      {!loggedInUser
        ?
        (() => {
          dispatch(setNotification('error', 'Unauthorised Access', 3))
          return <Redirect to='/admin' />
        })()
        :
        <div>
          Edit Page
        </div>
      }
    </div>
  )
}

export default EditSectionPage