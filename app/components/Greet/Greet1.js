import React, { PropTypes } from 'react'

const Greet = ({message}) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  )
}

Greet.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Greet