import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import * as userActions from 'store/users'

class AuthenticateContainer extends Component {
  handleAuth = () => {
    auth()
    this.props.authUser('123')
  }

  render() {
    return (
      <Authenticate
        isFetching={false}
        error={false}
        onAuth={this.handleAuth} />
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)
