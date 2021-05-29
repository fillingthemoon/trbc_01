import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AdminLoginPage from '../AdminLoginPage'
import Notification from '../../components-reusable/Notification'
import AdminDashboardNavBar from '../AdminDashboardNavBar'

import { setNotification } from '../../reducers/notificationReducer'

import { sectionGetFuncs } from '../../helper-files/sectionGetFuncs'

const EditSectionPage = (props) => {
  const {
    editSectionName
  } = props

  const valueObject = sectionGetFuncs(editSectionName)[editSectionName]

  const dispatch = useDispatch()
  const loggedInUser = useSelector(state => state.loggedInUser)
  const notification = useSelector(state => state.notification)
  const section = useSelector(state => state[valueObject.camelCase])

  useEffect(() => {
    dispatch(valueObject.func())
  }, [])

  if (!section) {
    return null
  }

  if (!loggedInUser) {
    return <AdminLoginPage />
  }

  console.log(section)

  return (
    <div>
      <Notification notification={notification} />
      <AdminDashboardNavBar loggedInUser={loggedInUser} />
    </div>
  )
}

// {/* Iterate through each section item */}
// {section.map(sectionItem => {
//   // Iterate through each field in the section item
//   return Object.keys(sectionItem).map((field, i) =>
//     !(typeof sectionItem[field] === 'object' && sectionItem[field] !== null)
//       ? <p key={i}>{sectionItem[field]}</p>
//       // Iterate through each subfield if the field is a JavaScript object
//       : Object.keys(sectionItem[field]).map((subField, j) =>
//         <p key={j}>
//           {sectionItem[field][subField]}
//         </p>
//       )
//   )
// }
// )}

export default EditSectionPage