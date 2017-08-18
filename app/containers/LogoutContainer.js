import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Logout } from 'components'
import * as userActions from 'store/users'

class LogoutContainer extends Component {
  componentWillMount() {
    this.props.handleUnauth()
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
