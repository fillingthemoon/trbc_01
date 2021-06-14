import React from 'react'

import { Alert } from 'antd'

const Notification = ({ notification }) => {
  return (
    notification !== null && (
      <Alert
        message={notification.type === 'error' ? 'Error' : 'Success'}
        description={notification.description}
        type={notification.type}
        showIcon
        banner
        closable
        style={{
          textAlign: 'center',
          position: 'absolute',
          width: '100%',
          zIndex: '1',
        }}
      />
    )
  )
}

export default Notification
