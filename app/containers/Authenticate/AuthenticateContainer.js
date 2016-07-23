import React, { PropTypes } from 'react'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActionCreators from 'redux/modules/users'

function mapStateToProps (state) {
  console.log(state)
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(userActionCreators, dispatch)
}

const AuthenticateContainer = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    authUser: PropTypes.func.isRequired,
    fetchingUser: PropTypes.func.isRequired,
    fetchingUserFailure: PropTypes.func.isRequired,
    fetchingUserSuccess: PropTypes.func.isRequired,
  },
  handleAuth () {
    console.log('fetchingUser')
    this.props.fetchingUser()
    auth().then((user) => {
      // console.log('Authed User', user)
      console.log('fetchingUserSuccess')
      this.props.fetchingUserSuccess(user.uid, user, Date.now())
      console.log('authUser')
      this.props.authUser(user.uid)
    }).catch((error) => this.props.fetchingUserFailure(error))
  },
  render () {
    // console.log(this.props)
    // console.log('userActionCreators', userActionCreators)
    // console.log('isFetching', this.props.isFetching)
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth}/>
    )
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticateContainer)

