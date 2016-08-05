import React, { PropTypes } from 'react'

function Duck (props) {
  console.log(props)
  return (
    <div>Duck</div>
  )
}

Duck.propTypes = {
  duckId: PropTypes.string.isRequired,
}

export default Duck 