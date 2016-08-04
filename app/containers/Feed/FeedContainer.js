import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Feed } from 'components'
import * as feedActionCreators from 'redux/modules/feed'

const FeedContainer = React.createClass({
  propTypes: {
    error: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    newDucksAvailable: PropTypes.bool.isRequired,
    setAndHandleFeedListener: PropTypes.func.isRequired,
    resetNewDucksAvailable: PropTypes.func.isRequired,
  },
  componentDidMount () {
    // set a listener to ducks
    this.props.setAndHandleFeedListener()
  },
  render () {
    return (
      <Feed
        error={this.props.error}
        isFetching={this.props.isFetching}
        newDucksAvailable={this.props.newDucksAvailable}
        resetNewDucksAvailable={this.props.resetNewDucksAvailable}
      />
    )
  }
})

function mapStateToProps ({feed}) {
  const { newDucksAvailable, error, isFetching  } = feed
  return {
    newDucksAvailable,
    error,
    isFetching,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(feedActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer)