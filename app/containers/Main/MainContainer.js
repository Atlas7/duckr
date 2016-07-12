import React from 'react'
import { color } from './styles.css'

const MainContainer = React.createClass({
  getInitialState () {
    return {
      name: "Johnny"
    }
  },
  handleClick () {
    this.setState({
      name: "Chan"
    })
  },
  render () {
    return (
      <p onClick={this.handleClick} className={color}>{`Yo ${this.state.name}`}</p>
    )
  },
})

export default MainContainer
