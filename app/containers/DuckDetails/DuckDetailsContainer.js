import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DuckDetails } from 'components'
import * as ducksActionCreator from 'redux/modules/ducks'
import * as likeCountActionCreator from 'redux/modules/likeCount'

const DuckDetailsContainer = React.createClass({
  propTypes: {
    authedUser: PropTypes.object.isRequired,
    duckId: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    duckAlreadyFetched: PropTypes.bool.isRequired,
    removeFetching: PropTypes.func.isRequired,
    fetchAndHandleDuck: PropTypes.func.isRequired,
  },
  componentDidMount () {
    if (this.props.duckAlreadyFetched === false) {
      this.props.fetchAndHandleDuck(this.props.duckId)
    } else {
      this.props.removeFetching()
    }
  },
  render () {
    return (
      <DuckDetails
        authedUser = {this.props.authedUser}
        duckId = {this.props.duckId}
        isFetching= {this.props.isFetching}
        error = {this.props.error}
      />
    )
  },
})

function mapStateToProps ({users, ducks, likeCount}, props) {
  return {
    authedUser: users[users.authedId].info,
    duckId: props.routeParams.duckId,
    isFetching: ducks.isFetching || likeCount.isFetching,
    error: ducks.error,
    duckAlreadyFetched: !!ducks[props.routeParams.duckId]
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(ducksActionCreator , dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DuckDetailsContainer)
