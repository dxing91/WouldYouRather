import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Logout } from 'components'
import * as userActions from 'store/users'
import { logout } from 'helpers/auth'

class LogoutContainer extends Component {
  componentWillMount() {
    logout()
    this.props.unauthUser()
  }
  render() {
    return (
      <Logout />
    )
  }
}

function mapStatetoProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch)
}

export default connect(mapStatetoProps, mapDispatchToProps)(LogoutContainer)
