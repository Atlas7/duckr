import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Duck } from 'components'
import * as usersLikesActionCreators from 'redux/modules/usersLikes'

const { func, object, bool, number, string } = PropTypes

const DuckContainer = React.createClass({
  propTypes: {
    duckId: string.isRequired,
    duck: object.isRequired,
    handleClick: func,
    hideLikeCount: bool.isRequired,
    hideReplyBtn: bool.isRequired,
    isLiked: bool.isRequired,
    numberOfLikes: number,
    addAndHandleLike: func.isRequired,
    handleDeleteLike: func.isRequired,
  },
  contextTypes: {
    router:PropTypes.object.isRequired,
  },
  getDefaultProps () {
    return {
      hideLikeCount: true,
      hideReplyBtn: false,
    }
  },
  goToProfile (e) {
    e.stopPropagation()
    this.context.router.push(`/${this.props.duck.get('uid')}`)
  },
  handleClick (e) {
    e.stopPropagation()
    this.context.router.push(`/duckDetail/${this.props.duck.get('duckId')}`)
  },
  render () {
    return (
      <Duck
        goToProfile={this.goToProfile}
        onClick={this.props.hideReplyBtn === true ? null : this.handleClick}
        {...this.props}
      />
    )
  },
})

function mapStateToProps ({ducks, likeCount, usersLikes}, props) {
  //debugger
  return {
    duck: ducks.get(props.duckId),
    hideLikeCount: props.hideLikeCount,
    hideReplyBtn: props.hideReplyBtn,
    isLiked: usersLikes[props.duckId] === true,
    numberOfLikes: likeCount[props.duckId],
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(usersLikesActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DuckContainer)