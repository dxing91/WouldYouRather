import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Navigation } from 'components'
import { firebaseAuth } from 'config/constants'
import * as usersActions from 'store/users' 

class MainContainer extends Component {
  componentDidMount() {
    const { authUser, fetchAndHandleDecisions, fetchingUserSuccess,
      fetchingUserFailure, removeFetchingUser } = this.props
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        const userData = user.providerData[0]
        const userInfo = {
          name: userData.displayName,
          uid: user.uid
        }
        fetchAndHandleDecisions(user.uid)
          .then(() => authUser(user.uid))
          .then(() => fetchingUserSuccess(user.uid, userInfo, Date.now()))
          .then(() => {
            if (this.props.location.pathname = '/') this.context.router.replace('/list')
          })
          .catch((error) => fetchingUserFailure())
      } else {
        removeFetchingUser()
      }
    })
  }

  render() {
    const { isFetching, isAuthed } = this.props
    if (isFetching) return null
    return (
      <div style={{height: '100%'}}>
        <Navigation isAuthed={isAuthed} />
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

MainContainer.propTypes = {
  isAuthed: PropTypes.bool.isRequired
}

MainContainer.contextTypes = {
  router: PropTypes.object
}

function mapStateToProps(state) {
  return {
    isAuthed: state.users.isAuthed,
    isFetching: state.users.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(usersActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
