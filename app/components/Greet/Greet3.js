import React, { PropTypes } from 'react'

function Greet3 ({message}) {
  return (
    <div>
      <p>{message}</p>
    </div>
  )
}

Greet3.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Greet3