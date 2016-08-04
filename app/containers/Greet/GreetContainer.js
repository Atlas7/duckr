import React, { PropTypes } from 'react'
import { Greet1, Greet2, Greet3 } from 'components'

const GreetContainer = React.createClass({
  render () {
    return (
      <div>
        <Greet1 message="This is Greet1"/>
        <Greet2 message="This is Greet2"/>
        <Greet3 message="This is Greet3"/>
      </div>
    )
  },
})

export default GreetContainer