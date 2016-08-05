import React, { PropTypes } from 'react'

Greet2.propTypes = {
  message: PropTypes.string.isRequired,
}

export default function Greet2 ({message}) {
  return (
    <div>
      <p>{message}</p>
    </div>
  )
}
