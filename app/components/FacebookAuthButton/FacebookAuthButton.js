import React, { PropTypes } from 'react'
import { button } from './styles.css'

const FacebookAuthButton = ({onAuth, isFetching}) => {
  return (
    <button onClick={onAuth} className={button}>
      {isFetching === true ? 'Loading' : 'Login with Facebook'}
    </button>
  )
}

FacebookAuthButton.PropTypes = {
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}

export default FacebookAuthButton