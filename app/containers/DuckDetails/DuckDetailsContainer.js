import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DuckDetails } from 'components'

const DuckDetailsContainer = React.createClass({
  propTypes: {
    authedUser: PropTypes.object.isRequired,
    duckId: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
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
    // isFetching: ducks.isFetching || likeCount.isFetching,
    isFetching: false,
    error: ducks.error
  }
}

// function mapDispatchToProps (dispatch) {
//   return bindActionCreators( , dispatch)
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(DuckDetailsContainer)
