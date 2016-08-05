import React, { PropTypes } from 'react'

const Greet1 = function ({message}) {
  return (
    <div>
      <p>{message}</p>
    </div>
  )
}

Greet1.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Greet1